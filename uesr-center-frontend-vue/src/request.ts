import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:8080", // 设置默认的请求地址
  timeout: 10000, // 设置请求超时时间（10秒）
  withCredentials: true, // 允许携带 Cookie（跨域时需要）
});
//请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    return config; // 这里没有做额外处理，直接返回请求配置
  },
  function (error) {
    return Promise.reject(error); // 如果请求发送失败，直接抛出错误
  }
);
//响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    console.log(response); // 打印完整的响应对象

    const { data } = response; // 解构出 `data`
    console.log(data); // 打印响应的 `data` 部分

    //未登录
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes("user/current") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default myAxios; //其他文件可以 直接导入 myAxios 来进行请求，而不用每次都手动配置 baseURL、timeout 等参数

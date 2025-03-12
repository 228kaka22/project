<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://baidu.com" target="_blank">百度一下</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentUser } from "@/api/user";
import GlobalHeader from "@/components/GlobalHeader.vue";

getCurrentUser().then((res) => {
  console.log(res);
}); //开后端才不报错
</script>

<style>
.ant-layout-footer.footer {
  background-color: #6b0d0d;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
}
.ant-layout-content.content {
  padding: 30px;
  margin-bottom: 30px;
  background: linear-gradient(to right, #efefef, #fff);
}
.ant-layout-header.header {
  background: white !important;
  color: unset !important;
  margin-bottom: 16px;
  padding-inline: 20px;
}
</style>
safasfasf
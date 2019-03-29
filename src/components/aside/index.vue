<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
    <el-menu-item index="2" :route="{path: '/'}">
      <i class="iconfont">&#xe65e;</i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="iconfont">&#xe616;</i>
        <span slot="title">用户管理</span>
      </template>
      <el-menu-item index="1-1" :route="{path: '/user/userList'}">全部用户</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import bus from "@/components/bus.js";
export default {
  name: "VAside",
  data() {
    return { isCollapse: true };
  },
  computed: {},
  mounted() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.isCollapse = msg;
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>

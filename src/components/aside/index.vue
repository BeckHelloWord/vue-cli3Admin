<template>
  <el-aside class="aside" :style="{width:setWidth}">
    <div style="text-align:right;">
      <i class="el-icon-arrow-left" v-show="!isCollapse" @click="isCollapse=true"></i>
      <i class="el-icon-arrow-right" v-show="isCollapse" @click="isCollapse=false"></i>
    </div>
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
  </el-aside>
</template>
<script>
export default {
  data() {
    return { isCollapse: true };
  },
  computed: {
    setWidth: function() {
      this.$nextTick(() => {
        return this.isCollapse ? "65px" : "300px";
      });
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>

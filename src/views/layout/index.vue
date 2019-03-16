<template>
  <el-container class="container">
    <eHeader></eHeader>
    <el-container>
      <eAside></eAside>
      <el-container class="container">
        <eBreadcrumb></eBreadcrumb>
        <eMain></eMain>
        <!-- <eFooter></eFooter> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import eHeader from "@/components/header";
import eAside from "@/components/aside";
import eMain from "@/components/main";
import eFooter from "@/components/footer";
import eBreadcrumb from "@/components/breadcrumb";

export default {
  created() {},
  mounted() {},
  components: {
    eHeader,
    eFooter,
    eAside,
    eMain,
    eBreadcrumb
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>


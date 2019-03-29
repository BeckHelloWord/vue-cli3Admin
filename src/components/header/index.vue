
<template>
  <el-header class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">
      <span>个人后台管理系统</span>
    </div>
    <div class="info">
      <span>xxx</span>
      <span @click="updatePassWord">修改密码</span>
      <span>退出</span>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-header>
</template>

<script>
import bus from "@/components/bus.js";
export default {
  name: "VHeader",
  props: {},
  data() {
    return {
      dialogVisible: false,
      collapse: false
    };
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {
    updatePassWord() {
      this.dialogVisible = true;
    },
    handleClose() {},

    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  background: #409eff;
  .logo {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  .info {
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    > span {
      padding: 0 10px;
      &:hover {
        color: #eee;
      }
    }
    span + span {
      border-left: 1px solid #e4e7ed;
    }
  }
}
</style>


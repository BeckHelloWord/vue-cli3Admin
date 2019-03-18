<template>
  <div class="filtration">
    <div class="filter">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="btns">
      <el-button type="primary">查询</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "VFiltration",
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="scss" scoped>
.filtration {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  margin-bottom: 20px;
  border: 1px solid #ebeef5;
  .filter {
    flex: 1;
  }
  .btns {
    min-width: 100px;
    text-align: right;
  }
}
</style>

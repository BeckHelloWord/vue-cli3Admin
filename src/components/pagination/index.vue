<template>
  <div class="pagination">
    <div>
      <slot></slot>
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "VPagination",
  data() {
    return {
      currentPage4: 1
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
</style>

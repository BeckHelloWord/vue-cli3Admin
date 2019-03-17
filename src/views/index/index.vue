<template>
  <div>首页</div>
</template>
<script>
import { userList } from "@/api/api";
export default {
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      userList()
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="scss">
</style>

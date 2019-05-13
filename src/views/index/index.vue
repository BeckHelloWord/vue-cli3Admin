<template>
  <div><div class="index"></div></div>
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
.index{
  height:800px;
}
</style>

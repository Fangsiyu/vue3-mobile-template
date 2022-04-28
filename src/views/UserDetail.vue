<template>
  <div class="about">
    <h3>{{ currentDate }}</h3>
    <h3>
      列表详情<br />
      每次进入刷新
    </h3>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "AboutView",
  setup() {
    const currentDate = ref(new Date().toLocaleTimeString());
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      //初始化
    });

    return {
      currentDate,
      route,
      router,
    };
  },
};
</script>
<style lang="less" scoped>
.btns {
  display: flex;
  justify-content: space-around;
  > button {
    width: 33%;
  }
}
section {
  margin-top: 10px;
}
</style>

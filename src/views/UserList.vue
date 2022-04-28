<template>
  <div class="list">
    <h3>{{ currentDate }}</h3>
    <h3>每次进入刷新，从详情返回不刷新</h3>
    <h4 @click="toDetail" v-for="i in 10" :key="i">
      This is an List page {{ i }}
    </h4>
  </div>
</template>
<script>
import { ref, onActivated } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "AboutView",
  setup() {
    const currentDate = ref("");
    const route = useRoute();
    const router = useRouter();

    const init = () => {
      currentDate.value = new Date().toLocaleTimeString();
    };
    const toDetail = () => {
      router.push({
        name: "Detail",
      });
    };

    // onMounted(() => {
    //   console.log(route, "route");
    //   init();
    // });

    onActivated(() => {
      console.log("activated");
      if (route.meta.reload) {
        init();
      }
    });
    return {
      currentDate,
      route,
      router,
      toDetail,
      init,
    };
  },
};
</script>
<style lang="less" scoped>
.list {
  font-size: 12px;
}
h3 {
  font-size: 16px;
}
h4 {
  text-decoration: underline;
  font-size: 14px;
}
</style>

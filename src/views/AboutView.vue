<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>demo：{{ demo }}</h1>
    <div class="btns">
      <van-button @click="onAdd" size="small" type="primary">+1</van-button>
      <van-button @click="onReset" size="small" type="warning"
        >reset</van-button
      >
    </div>
    <section>
      <h2>demo2：{{ demo2 }}</h2>
    </section>
    <section>Route：{{ $route.path }}</section>
    <section>Route：{{ route.path }}</section>
    <section>
      <!-- Router：{{ router }} -->
    </section>
  </div>
</template>
<script>
import { ref, onMounted, watchEffect } from "vue";
import { useRoute,useRouter } from "vue-router";
export default {
  name: "AboutView",
  setup() {
    const demo = ref(1);
    const demo2 = ref(1);
    watchEffect(() => {
      demo2.value = demo.value * 2;
      console.log(demo.value);
    });

    const route = useRoute();
    const router = useRouter();

    const onAdd = () => {
      demo.value += 1;
    };
    const onReset = () => {
      demo.value = 1;
    };

    onMounted(() => {
      //初始化
      demo.value++;
      console.log(route,'route')
      console.log(router,'router')
    })

    return {
      demo,
      demo2,
      onAdd,
      onReset,
      route,
      router,
    };
  },
};
</script>
<style lang="less" scoped>
.about{
  font-size: 12px;
}
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

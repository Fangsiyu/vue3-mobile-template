<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>demo：{{ demo }}</h1>
    <div class="btns">
      <van-button @click="onAdd" size="small" type="primary">+1</van-button>
      <van-button @click="onReset" size="small" type="warning">reset</van-button>
    </div>
    <section>
      Route：{{ $route.path }}
    </section>
    <section>
      Route：{{ route.path }}
    </section>
    <section>
      <!-- Router：{{ router }} -->
    </section>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute,useRouter } from "vue-router";
export default {
  name: "AboutView",
  setup() {
    const demo = ref(1);

    const route = useRoute();
    const router = useRouter();

    const onAdd = () => {
      demo.value += 1;
    };
    const onReset = () => {
      demo.value = 1;
    };

    return {
      demo,
      onAdd,
      onReset,
      route,
      router,
    };
  },
};
</script>
<style lang="less" scoped>
.btns{
  display: flex;
  justify-content: space-around;
  >button{
    width: 33%;
  }
}
</style>

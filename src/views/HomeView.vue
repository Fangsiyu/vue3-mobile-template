<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Vant UI</h2>
    <br />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <br />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scope lang="less">
@primary: #42b983;
h2{
  font-size: 30px;
  color: @primary;
}
  
</style>

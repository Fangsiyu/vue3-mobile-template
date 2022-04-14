<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png" />
    <h2>Vant UI</h2>
    <br />
    <div class="btns">
      <van-button type="primary" size="small">主要按钮</van-button>
      <van-button type="success" size="small">成功按钮</van-button>
      <van-button type="warning" size="small">警告按钮</van-button>
      <van-button type="danger" size="small">危险按钮</van-button>
    </div>

    <br />
    <div class="song">
      <img src="@assets/sony_cdit_90.png" alt="封面" />
    </div>
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
.home{
  padding: 20px;
}
// @primary: #42b983;
h2 {
  font-size: 30px;
  font-weight: bold;
  color: @primary;
}
.btns{
  display: flex;
  justify-content: space-around;
}
.song {
  margin: 20px auto;
  width: 200px;
  > img {
    width: 100%;
    object-fit: contain;
    transition: all 300ms ease-in-out;
  }
  > img:hover {
    box-shadow: 0 3px 10px 3px #ccc;
    filter: brightness(1.4);
    transform: scale(1.1);
  }
}
</style>

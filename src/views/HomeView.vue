<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png" />
    <h2>Vant UI</h2>
    <!-- <home theme="filled" /> -->
    <!-- <i-home theme="filled" /> -->
    <game-ps theme="two-tone" size="28" :fill="['#9013fe' ,'#2F88FF']"/>
    
    <br />
    <div class="btns">
      <van-button type="primary" size="small">主要按钮</van-button>
      <van-button type="success" size="small">成功按钮</van-button>
      <van-button type="warning" size="small">警告按钮</van-button>
      <van-button type="danger" size="small">危险按钮</van-button>
    </div>
    <div class="btns">
      <van-button @click="getData" type="primary" size="small"
        >模拟请求</van-button
      >
    </div>
    <div class="btns">
      返回结果：{{ result }} <br />
      error: {{ result2 }}
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
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { getDataOne } from "@api/data";
import {GamePs} from '@icon-park/vue-next';


export default {
  name: "HomeView",
  components: {
    HelloWorld,
    GamePs,
  },
  setup() {
    const data = ref({});
    const result = ref({});
    const result2 = ref({});
    const getData = async () => {
      // const res = await getDataOne();
      // console.log(res,'res')
      // result.value = res;
      getDataOne()
        .then((res) => {
          result.value = res;
        })
        .catch((err) => {
          console.log(err, "err");
          result2.value = err;
        });
    };
    return {
      data,
      result,
      result2,
      getData,
    };
  },
};
</script>
<style scoped lang="less">
.home {
  padding: 20px;
}
// @primary: #42b983;
h2 {
  font-size: 30px;
  font-weight: bold;
  color: @primary;
}
.btns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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

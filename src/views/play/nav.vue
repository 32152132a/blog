<template>
  <div class="play">
    <router-link
      class="tab"
      v-for="(item, value) in directory"
      :key="value"
      :to="item.router"
    >
      <h3>{{ item.title }}</h3>
      <span>{{ item.summary }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directory: [
        {
          title: "点一点",
          summary:
            "随机产生颜色块，记住所有指定颜色块的位置即可胜利,灵感来源于看密室逃脱里的一个解密游戏",
          router: "/Index/play/randomColor",
        },
        {
          title: "跳一跳",
          summary:
            "小恐龙跳一跳，点击空格，躲避障碍物灵感来源于浏览器未连接网络的界面",
          router: "/Index/play/jump",
        },
        {
          title: "抽  奖",
          summary: "未完成，点击抽奖还有bug",
          router: "/Index/play/turntable",
        },
        {
          title: "抢红包",
          summary: "拼手气抢红包，灵感来源于一次面试",
          router: "/Index/play/envelope",
        },
        {
          title: "词云",
          summary: "拼手气抢红包，灵感来源于一次面试",
          router: "/Index/play/wordcloud",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.play {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: center;
  .tab {
    text-decoration: none;
    width: 150px;
    height: 150px;
    background-color: #fff;
    // color: #333;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #666;
    // text-align: center;
    font-size: 12px;
    color: #666;
    transition: 0.5s all;
    h3 {
      text-align: center;
      font-size: 16px;
      margin: 10px 0;
    }
    &:hover {
      transform: scale(1.1);
      background-color: #f1f1f1;
    }
  }
}
</style>
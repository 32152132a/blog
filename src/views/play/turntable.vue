<template>
  <div class="jump">
    <div class="turntable">
      <div
        :class="{ selected: selectIndex == item }"
        v-for="item in 12"
        :key="item"
      >
        {{ item }}
      </div>
      <div class="btn" @click="start">开始</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      selectIndex: 1,
      random: 100,
      time: "",
      time2: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    start() {
      this.time = setInterval(() => {
        this.time2 = "";
        this.random = this.random + 100;
        this.time2 = setInterval(() => {
          this.selectIndex++;
          console.log(this.selectIndex);
          if (this.selectIndex > 12) {
            this.selectIndex = 0;
          }
        }, this.random);
        if (this.random > 3000) {
          clearInterval(this.time2);
          clearInterval(this.time);
          this.time2 = "";
          this.time = "";
        }
      }, 1000);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang="less" scoped>
.jump {
  width: 350px;
  height: 350px;
  margin: 50px auto 0 auto;
  // background-color: #fff;
  overflow: hidden;
  .turntable {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    & > div {
      width: 80px;
      height: 80px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(5) {
      grid-column: 4 / span 1;
      grid-row: 2 / span 1;
    }
    & > div:nth-child(6) {
      grid-column: 4 / span 1;
      grid-row: 3 / span 1;
    }
    & > div:nth-child(7) {
      grid-column: 4 / span 1;
      grid-row: 4 / span 1;
    }
    & > div:nth-child(8) {
      grid-column: 3 / span 1;
      grid-row: 4 / span 1;
    }
    & > div:nth-child(9) {
      grid-column: 2 / span 1;
      grid-row: 4 / span 1;
    }
    & > div:nth-child(10) {
      grid-column: 1 / span 1;
      grid-row: 4 / span 1;
    }
    & > div:nth-child(11) {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
    }
    & > .btn {
      background: #fff;
      width: 100%;
      height: 100%;
      grid-column: 2 / span 2;
      grid-row: 2 / span 2;
    }
    .selected {
      box-sizing: border-box;
      border: 1px solid red;
    }
  }
}
</style>

<template>
  <div class="env">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="抢红包个数">
        <el-select v-model="formInline.user" placeholder="活动区域">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="总金额">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="40" value="40"></el-option>
          <el-option label="100" value="100"></el-option>
          <el-option label="200" value="200"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">开始</el-button>
      </el-form-item>
    </el-form>
    <div class="env-p">
      <p v-for="(item, index) in listArr" :key="index">
        第{{ index + 1 }}次红包 {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      formInline: {
        user: 2,
        region: 40,
      },
      listArr: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit() {
      this.listArr = [];
      this.assign(this.formInline.region, this.formInline.user);
    },

    assign(totalAmount, totalPeople) {
      var remainAmount = +totalAmount;
      console.log(totalAmount);
      var remainPeople = +totalPeople;
      var arr = [];
      while (remainPeople > 0) {
        let num = this.scramble(remainAmount, remainPeople);
        remainAmount = remainAmount - num;
        remainPeople--;
        arr.push(num);
      }
      this.listArr = arr;
    },
    scramble(remainAmount, remainPeople) {
      if (remainPeople === 1) {
        return +remainAmount.toFixed(2);
      }
      let max = ((remainAmount / remainPeople) * 2 - 0.01).toFixed(2);
      let min = 0.01;
      let range = max - min;
      let rand = Math.random();
      let num = min + rand * range; //四舍五入
      console.log(Math.round(num * 100) / 100);
      return Math.round(num * 100) / 100;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang="less" scoped>
.env {
  width: 600px;
  height: 350px;
  margin: 50px auto 0 auto;
  // background-color: #fff;
  overflow: hidden;
  .env-p {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
}
</style>
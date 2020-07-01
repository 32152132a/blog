<template>
  <div class='header'>
    <div>
      <div class='header-img'>
        <el-avatar :src="imgSrc"></el-avatar>
      </div>
      <div class='header-name'>
        <span>{{name}}的寒舍</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    //这里存放数据
    return {
      radne: '',
      name: '曲永庆'
    };
  },
  components: {
  },

  //监听属性 类似于data概念
  computed: {
    imgSrc () {
      return this.$store.getters.getUser.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  //监控data中的数据变化
  watch: {
    radne (val) {
      console.log(val)
    }
  },
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
@import url("./style.css");
.el-avatar {
  width: 150px;
  height: 150px;
  margin: 120px 0 40px 0;
  opacity: 1;
}

.header-name {
  font-size: 30px;
  font-weight: 500;
  font-family: "楷体";
  color: #fff;
}
.header-name span {
  display: inline-block;
  animation: shake-slow 5s infinite;
}

.header {
  height: 400px;
  background: url("https://website-oss.oss-cn-beijing.aliyuncs.com/common/img/bg5.jpg")
    center center no-repeat;
  background-size: cover;
  text-align: center;
}
</style>
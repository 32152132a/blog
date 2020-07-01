
<template>
  <div class='login'>
    <el-form label-position="left" label-width="50px" :model="form">
      <div class='header-img'>
        <el-avatar :src="imgSrc"></el-avatar>
      </div>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-button @click='login'>登录</el-button>
    </el-form>
  </div>
</template>

<script>

// import { userLogin } from '../../axios/api/login'
export default {
  components: {
  },
  data () {
    //这里存放数据
    return {
      form: {
        email: '1611042821@qq.com',
        password: '345678910jqka'
      }
    };
  },
  //监听属性 类似于data概念
  computed: {
    imgSrc () {
      return this.$store.getters.getUser.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login () {
      // userLogin(this.form).then(res => {
      //   console.log(res)
      // })
      this.$store.dispatch('handleUsers', this.form)

    }
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
<style scoped lang='less'>
.el-form {
  text-align: center;
  width: 90%;
  max-width: 600px;
  margin: 100px auto;
  box-shadow: 0px 0px 10px #999;
  border-radius: 20px;
  padding: 40px 30px;
}
.el-avatar {
  width: 80px;
  height: 80px;
  margin: 30px 0 50px 0;
  opacity: 1;
}
</style>
<template>
  <div class='header'>
    <!-- <div class='menu' @click="openMenu"><i class='el-icon-menu'></i></div> -->
    <div class='header-img'>
      <a href="http://www.96qufei.cn/"><i class='el-icon-s-home'></i>96qufei.cn</a>
    </div>
    <div class='searsh'>

      <searsh></searsh>
    </div>
    <div class='header-name'>
      <span>{{name}}的寒舍</span>
    </div>
    <div @click="outLogin">登录</div>
  </div>
</template>

<script>
import searsh from '@/components/Searsh'
export default {
  data () {
    //这里存放数据
    return {
      radne: '',
      name: '曲永庆'
    };
  },
  components: {
    searsh
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
    outLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    openMenu () {
      this.$store.commit('setMenu', !this.$store.getters.openMenu)
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
<style scoped lang= 'less'>
@import url("./style.css");

.header {
  display: grid;
  grid-template-columns: 150px 1fr 150px 50px;
  gap: 0 10px;
  padding: 10px;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  .menu {
    display: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    i {
      margin-right: 5px;
    }
  }
  .header-img {
    text-align: center;
  }
  .header-name {
    animation: shake-slow 40s infinite;
  }
  .el-input__inner {
    background-color: red;
  }
  .searsh {
    /* width: 400px; */
    text-align-last: left;
    transform: scale(0.8) translateX(-50px);
  }

  /* background-color: #fff; */
}
@media (max-width: 800px) {
  /* .header {
    display: grid;
    grid-template-columns: 50px 150px 1fr;
    & > div:nth-child(4),
    & > div:nth-child(5) {
      display: none;
    }
    .menu {
      display: block;
      text-align: center;
    }
  } */
}
</style>
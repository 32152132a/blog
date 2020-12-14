
<template>
  <div class='body'>
    <v-header></v-header>

    <!-- <v-content></v-content> -->
    <div class='Index'>
      <v-nav></v-nav>
      <div class='content'>
        <router-view />
      </div>

      <sidebar></sidebar>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/layouts/header/index'
import footer from '@/layouts/footer/index'
import nav from '@/layouts/navtab/index'
import sidebar from '@/layouts/sideBar/SideBar'



// import content from '@/views/content/index'
export default {
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-nav': nav,
    'sidebar': sidebar
  },
  data () {
    //这里存放数据
    return {
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
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
<style scoped lang='less'>
.body {
  height: 100vh;
  .header {
    max-width: 1180px;
    margin: 0 auto;
    border-radius: 0 0 20px 20px;
  }
}
.Index {
  display: grid;
  grid-template-columns: 150px 1fr 200px;
  align-content: space-evenly;
  gap: 10px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;

  & > .content {
    min-width: 600px;
    background: rgba(255, 255, 255, 0.3);
    padding: 10px 10px;
    border-radius: 10px;
    height: 500px;
    overflow: auto;
  }
}

@media (max-width: 1000px) {
  .Index {
    display: grid;
    grid-template-columns: 150px 1fr;
  }
  .sidebar {
    display: none;
  }
}
@media (max-width: 800px) {
}
</style>
<template>
  <div class='sidebar'>
    <div class='sidebar-contact'>
      <el-image v-for="(item,value) in squareUrlList" style="width: 45px; height:40px" :src="item" :key='value'
        fit="contain"></el-image>
    </div>
    <div class='sidebar-tab'>
      <div class='sidebar-tab-header'>
        <img :src="tabSrc">
        <el-divider direction="vertical"></el-divider>
        <span>标签</span>
      </div>

      <el-divider></el-divider>
      <div class="sidebar-tab-content">
        <el-tag v-for='(item,value) in type' :type='tageType[Math.floor(Math.random()*tageType.length)]' :key='value'>
          {{item}}</el-tag>
      </div>
    </div>
    <div class='sidebar-link'>
      <div class='sidebar-link-header'>
        <img :src="linkSrc">
        <el-divider direction="vertical"></el-divider>
        <span>链接</span>
      </div>

      <el-divider></el-divider>
      <div class="sidebar-link-content">
        <ul>
          <li v-for='(item,value) in 4' :key='value'>
            <a href="http://www.96qufei.cn">个人简历</a>
          </li>
        </ul>
      </div>
    </div>
    <catKeyboard></catKeyboard>

  </div>
</template>

<script>
import catKeyboard from '@/components/animate/catKeyboard'
export default {
  components: {
    catKeyboard
  },
  data () {
    //这里存放数据
    return {
      squareUrlList: [`${this.ossSrc}WeChat.png`, `${this.ossSrc}email.png`, `${this.ossSrc}microblog.png`,
      `${this.ossSrc}subscription.png`
      ],
      tageType: ['success', 'info', 'warning', 'danger', '']
    };
  },
  //监听属性 类似于data概念
  computed: {
    tabSrc () {
      return `${this.ossSrc}tab.png`;
    },
    linkSrc () {
      return `${this.ossSrc}link.png`;
    },
    type () {
      return this.$store.getters.getArticle.articleType
    },
    category () {
      return this.$store.getters.getArticle.articleCategory
    }
  },

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
    // console.log(this.ossSrc)
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
.sidebar-contact {
  background: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px 0;
}

.sidebar-tab,
.sidebar-link {
  background: #fff;
  /* padding: 10px; */
  margin: 10px;
}

.sidebar-tab-header,
.sidebar-link-header {
  display: flex;
  align-items: center;
}

.el-divider--horizontal {
  margin: 10px 0;
}

.sidebar-tab-content {
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}

.sidebar-link-content ul {
  list-style: none;
  padding-left: 10px;
}
.sidebar-link-content ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.sidebar-link-content ul li::before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #ddd;
  border-radius: 50px;
  margin-right: 10px;
  transition: 0.5s all;
}
.sidebar-link-content ul li:hover::before {
  transform: scale(2.5);
  box-shadow: 0px 0px 2px #aaa;
}
.sidebar-link-content a {
  text-decoration: none;
  color: #555;
}

.sidebar-tab-content .el-tag {
  text-align: center;
  min-width: 50px;
  margin: 5px;
}

.sidebar-tab img,
.sidebar-link-header img {
  width: 20px;
}

.sidebar-contact span {
  background: #fff;
}
</style>
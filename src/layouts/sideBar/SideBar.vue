<template>
  <div class='sidebar'>

    <div class='sidebar-tab'>
      <div class='sidebar-tab-header'>
        <img :src="tabSrc">
        <el-divider direction="vertical"></el-divider>
        <span>标签</span>
      </div>

      <el-divider></el-divider>
      <div class="sidebar-tab-content">
        <el-tag v-for='(item,value) in type' :type='tageType[Math.floor(Math.random()*tageType.length)]' :key='value'
          @click="getArts(item)">
          {{item}}</el-tag>
      </div>
    </div>
    <div class='sidebar-link'>
      <div class='sidebar-link-header'>
        <img :src="linkSrc">
        <el-divider direction="vertical"></el-divider>
        <span>博客信息</span>
      </div>

      <el-divider></el-divider>
      <div class="sidebar-link-content">
        <ul>
          <li v-for='(item,value) in info' :key='value'>
            <div>
              <i :class="i[value]"></i>
              <span>{{item.title}}</span>
            </div>
            <div>

              <span>{{item.value}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class='sidebar-contact'>
      <el-image v-for="(item,value) in squareUrlList" style="width: 45px; height:40px" :src="item" :key='value'
        fit="contain"></el-image>
    </div> -->
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
      tageType: ['success', 'info', 'warning', 'danger', ''],
      info: [
        { title: '文章数目', value: '7' },
        { title: '评论数目', value: '2' },
        { title: '运行天数', value: '22天' },
        { title: '最后活动', value: '一天前' },
      ],
      i: ['el-icon-document', 'el-icon-edit', 'el-icon-smoking', 'el-icon-view']
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
    getArts (val) {
      console.log({ tags: [val] })
      this.$store.commit('setIsArticleList', false)
      this.$store.dispatch('handleArticles', { tags: [val] })
        .then(res => {
          console.log(res)
          this.$router.push({ path: '/Index/content' })
        })
    }
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
<style scoped lang='less'>
.sidebar {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 10px;
}
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
  background-color: rgba(50, 50, 50, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
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
  justify-content: space-between;
  font-size: 12px;
  i {
    font-size: 10px;
    margin-right: 5px;
  }
  & > div:nth-child(2) {
    span {
      display: inline-block;
      background-color: #00b2ff57;
      border-radius: 25px;
      padding: 2px 5px;
    }
  }
}

.sidebar-link-content a {
  text-decoration: none;
  color: #555;
}

.sidebar-tab-content .el-tag {
  text-align: center;
  border-radius: 200px;
  padding: 1%;
  // background-color: rgba(255, 255, 255, 0.6);
  transition: 0.5s all;
  transform: scale(0.9);
  font-size: 14px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
    cursor: pointer;
  }
}

.sidebar-tab img,
.sidebar-link-header img {
  width: 20px;
}

.sidebar-contact span {
  background: #fff;
}
</style>
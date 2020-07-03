<!--  -->
<template>
  <div class='content'>
    <article-list :article='article'></article-list>
  </div>

</template>

<script>
import articleList from '@/components/content/articleList'
export default {
  components: {
    "article-list": articleList
  },
  data () {
    //这里存放数据
    return {
      article: []
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
    this.$store.dispatch('handleArticles').then(res => {
      this.article = res.message
    })
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
.chunk {
  background-color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
}

.chunk-header {
  /* font-size: 2rem; */
  font-size: 1.17em;
  color: #2c3e50;
  font-weight: bold;
  margin: 10px 0 20px 10px;
}

.chunk-describe-img {
  text-align: center;
}

.chunk-introduce {
  font-size: 0.8rem;
  color: #666;
  font-weight: "楷体";
}

.chunk-introduce i {
  color: #aaa;
  margin: 0 5px;
}

.chunk-describe {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.chunk-describe-content {
  display: flex;
  padding: 20px;
}
</style>
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
    };
  },
  //监听属性 类似于data概念
  computed: {
    article () {
      if (this.$store.getters.getArticleList.length) {
        return this.$store.getters.getArticleList
      } else {
        return []
      }
    },
  },
  //监控data中的数据变化
  watch: {

  },
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.$store.dispatch('handleArticles')
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
.content {
  padding: 0;
}
</style>
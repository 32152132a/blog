
<template>
  <div class='article'>
    <!-- <v-content></v-content> -->
    <div class='content'>
      <div class='header'>
        <div class='header_left'>个人博客</div>
        <div class='header_right'>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

      </div>
      <div class='text'>
        <div class='title'>
          {{article.title}}
        </div>
        <div class='author'>
          <img :src="article.user_info_id" alt="">
          <div>{{new Date(article.created).toLocaleDateString()}}</div>
          <div>{{article.praise}}人已围观</div>
          <div>{{article.review}}人已赞</div>
        </div>
        <div class="summary">
          <span>简介:</span>{{article.summary}}
        </div>
        <div class="article_content" v-html='article.content'>
        </div>
        <div class="type_url" v-if='article.type_url'>
          <span>转载：</span>
          <a :href='article.type_url'>{{article.type_url}}</a>
        </div>
        <div class="type_url" v-if='!article.type_url'>
          <span>本文原创，转载请标注</span>
          <a :href='article.type_url'>{{article.type_url}}</a>
        </div>
        <div class='praise'>
          <el-button>很赞哦！ ({{article.review}})</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    //这里存放数据
    return {
      article: ''//数据
    };
  },
  //监听属性 类似于data概念
  computed: {
    id () {
      return this.$route.query.id
    },
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
    if (!Object.keys(this.$route.params).length) {
      let form = { id: this.id }
      // getArticle(form).then(res => {
      //   this.article = res.data
      // })
      this.$store.dispatch('handleGetArticle', form)
        .then(res => {
          this.article = res.data
        })
    } else {
      this.article = this.$route.params
    }


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
<style lang='less' scoped>
.article {
  align-content: space-evenly;
  gap: 20px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 10px 10px;

  .content {
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    .header {
      border-bottom: 1px solid #666;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      .header_left {
        display: inline-block;
        position: relative;
        padding: 5px 0;
        &::after {
          position: absolute;
          content: "";
          bottom: 0px;
          height: 2px;
          width: 100%;
          background-color: #333;
          left: 0;
          transition: 0.5s width;
        }
        &:hover::after {
          width: 130%;
        }
      }
      .header_right {
        font-size: 10px;
      }
    }
    .text {
      padding: 20px;
      .title {
        font-weight: 600;
        font-size: 18px;
        color: #000;
      }
      .author {
        display: flex;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          margin: 5px;
          margin-right: 10px;
          border: 2px solid #369;
          border-radius: 50%;
          vertical-align: top;
        }
        div {
          font-size: 12px;
          line-height: 1;
          margin: 0 5px;
          color: #999;
        }
      }
    }
    .summary {
      padding: 10px;
      font-size: 14px;
      background-color: #f3f3f3;
      color: #666;
      line-height: 1.5;
      letter-spacing: 2px;
      span {
        color: #000;
        font-weight: 600;
        margin-right: 10px;
      }
    }
    .article_content {
      padding: 20px 0;
    }
    .type_url {
      border-left: 2px solid #333;
      .summary;
    }
    .praise {
      text-align: center;
      margin: 10px;
    }
  }
}

@media (max-width: 1000px) {
  .sidebar {
    display: none;
  }
  .article {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
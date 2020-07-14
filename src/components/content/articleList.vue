<!--  -->
<template>
  <div class='content'>
    <div>
      <div class='chunk' v-for='(item,value) in articleList' :key='item._id' @click="details(item._id,item)">
        <div class="chunk-header">
          {{item.title}}
        </div>
        <div class="chunk-content">
          <div class="chunk-describe">

            <div class='chunk-describe-content'>
              {{item.summary}}
            </div>
          </div>
          <el-divider></el-divider>
          <div class="chunk-introduce">
            <i class="el-icon-user-solid"></i>
            <span>{{item.user_info_nick}}</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-watch"></i>
            <span>{{new Date(item.created).toLocaleDateString()}}</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-price-tag"></i>
            <span>{{item.tags[0]}}</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-chat-line-round"></i>
            <span>评论</span>
            <el-divider direction="vertical" v-if='!isLogin'></el-divider>
            <i class="el-icon-chat-line-round" v-if='!isLogin'></i>
            <span class='cur' v-if='!isLogin' @click.stop="deleteArticle(item._id,value)">删除</span>
            <el-divider direction="vertical" v-if='!isLogin'></el-divider>
            <i class="el-icon-chat-line-round" v-if='!isLogin'></i>
            <span class='cur' v-if='!isLogin' @click.stop="uptateArticle(item._id,item)">修改</span>
          </div>

        </div>
      </div>
    </div>
    <div class='page'>
      <el-pagination :page-size="5" @current-change="handleCurrentChange" background layout="prev, pager, next"
        :total="article.length">
      </el-pagination>
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
      pageSize: 1
    };
  },
  props: {
    /**
     * 标题
     */
    article: {
      type: [Array]
    }
  },
  //监听属性 类似于data概念
  computed: {
    articleList () {
      return this.article.slice((this.pageSize - 1) * 5, this.pageSize * 5)
    },
    isLogin () {
      return !this.$store.getters.getUser.isLogin
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    details (id, data) {
      this.$router.push({ path: '/Index/article', name: 'article', params: { ...data }, query: { id } })
    },
    deleteArticle (id, index) {

      this.$store.dispatch('handleDeleteArticle', { id }).then(res => {
        this.$message({
          message: res.data.message,
          type: 'success'
        });
      })
      this.article.splice(index + (this.pageSize - 1) * 5, 1)

      if (this.articleList.length <= 5) {
        this.handleCurrentChange(1)
      }
    },
    uptateArticle (id, data) {
      this.$router.push({ path: '/Index/backstage', name: 'backstage', params: { ...data }, query: { id } })
    },
    handleCurrentChange (val) {
      this.pageSize = val
      window.scrollTo(0, 0);
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
.chunk {
  background-color: rgba(50, 50, 50, 0.1);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  transition: 0.5s all;
}
.chunk:hover {
  transform: translateY(-5px);
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
  color: #f1f1f1;
  font-weight: "楷体";
  .cur {
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
}

.chunk-introduce i {
  color: #f1f1f1;
  margin: 0 5px;
}

.chunk-describe {
  display: grid;
  grid-template-columns: 1fr;
  color: #f1f1f1;
}

.chunk-describe-content {
  display: flex;
  padding: 20px;
}
.content {
  .page {
    text-align: left;
    .el-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      &\deep\ ul {
        display: flex;
      }
    }
  }
}
</style>
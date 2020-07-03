<!--  -->
<template>
  <div class='content'>
    <div>
      <div class='chunk' v-for='(item,value) in article' :key='item._id' @click="details(item._id,item)">
        <div class="chunk-header">
          {{item.title}}
        </div>
        <div class="chunk-content">
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
            <i class="el-icon-lollipop"></i>
            <span>❤</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-chat-line-round"></i>
            <span>评论</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-chat-line-round"></i>
            <span class='cur' @click.stop="deleteArticle(item._id,value)">删除</span>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-chat-line-round"></i>
            <span class='cur'>修改</span>
          </div>
          <el-divider></el-divider>
          <div class="chunk-describe">
            <div class='chunk-describe-img'>
              <el-image style="width: 100px; height: 100px" :src="item.cover" fit="fill" lazy>
              </el-image>
            </div>
            <div class='chunk-describe-content'>
              {{item.summary}}
            </div>
          </div>
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
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    details (id, data) {
      this.$router.push({ path: '/article', name: 'article', params: { ...data }, query: { id } })
    },
    deleteArticle (id, index) {

      this.$store.dispatch('handleDeleteArticle', { id }).then(res => {
        this.$message({
          message: res.data.message,
          type: 'success'
        });
      })
      this.article.splice(index, 1)
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
  .cur {
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
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
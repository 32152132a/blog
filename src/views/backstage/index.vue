<!--  -->
<template>
  <div class='backstage'>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章封面">
        <el-input v-model="form.cover"></el-input>
      </el-form-item>
      <el-form-item label="文章简介">
        <el-input v-model="form.summary"></el-input>
      </el-form-item>

      <el-form-item label="转载url">
        <el-input v-model="form.type_url"></el-input>
      </el-form-item>
      <el-form-item label="私密留言">
        <el-input v-model="form.private"></el-input>
      </el-form-item>
      <el-form-item label="seo_title">
        <el-input v-model="form.seo_title"></el-input>
      </el-form-item>

      <el-form-item label="是否加密">
        <el-radio v-model="form.is_private" label=true>加密</el-radio>
        <el-radio v-model="form.is_private" label=false>不加密</el-radio>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option v-for="item in category" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="博文分类">
        <el-select v-model="form.category" placeholder="请选择">
          <el-option v-for="item in category" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="文章标签">
        <el-select v-model="form.tags" placeholder="请选择">
          <el-option v-for="item in type" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="用户id" v-if='false'>
        <el-input v-model="form.user_info_id"></el-input>
      </el-form-item>
      <el-form-item label="是否加密" v-if='false'>
        <el-input v-model="form.is_private"></el-input>
      </el-form-item>

    </el-form>
    <UEditor ref='UEditor' class='UEditor'></UEditor>
    <el-button type='success' @click="submit">保存</el-button>
  </div>
</template>

<script>
import UEditor from '@/components/UEditor'
import {
  allArticle
} from '@/axios/api/article'
export default {
  components: {
    UEditor
  },
  data () {
    //这里存放数据
    return {
      form: {
        title: '测试标题',
        content: '',
        summary: '测试简介',
        type_url: '转载url',
        type: '技术',
        category: '技术',
        private: '闭嘴',
        tags: 'java',
        cover: '文章封面',
        is_private: false,
        user_info_id: '',
        user_info_nick: '',
        user_info_cover: '',

        seo_title: '测试文章'
      }

    };
  },
  computed: {
    type () {
      return this.$store.getters.getArticle.articleType
    },
    category () {
      return this.$store.getters.getArticle.articleCategory
    },
    user () {
      return this.$store.getters.getUser
    }

  },
  methods: {
    submit () {
      this.form.content = this.$refs.UEditor.msg
      this.form.user_info_id = this.user.id
      this.form.user_info_nick = this.user.name
      this.form.user_info_cover = this.user.avatar
      console.log(this.form)

      allArticle(this.form).then(res => {
        this.$message({
          message: res.data.message,
          type: 'success'
        });
      })

      console.log(this)
    }
  },
  mounted () {
  }


}
</script>
<style  scoped>
.UEditor {
  background-color: #fff;
  margin: 15px;
}
.backstage {
  text-align: center;
}
.el-select,
.el-button {
  margin: 5px 10px;
}
.el-button {
  width: 200px;
}
.el-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
}
</style>
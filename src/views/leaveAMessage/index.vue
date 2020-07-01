<template>
  <div class='index'>
    <div class="container">
      <quill-editor ref="myTextEditor" class='myTextEditor' v-model="content" :options="editorOption"></quill-editor>
    </div>
    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
export default {
  name: 'editor',
  data: function () {
    return {
      content: '',
      editorOption: {
        placeholder: 'Hello World'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html;
      console.log(editor)
      console.log(text)
    },
    submit () {
      console.log(this.content);
      this.$message.success('提交成功！');
    }
  }
}
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
.myTextEditor {
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  margin-bottom: 20px;
  text-align-last: left;
}
.myTextEditor >>> .ql-editor {
  min-height: 300px;
}
.index {
  text-align: center;
}
.el-button {
  width: 300px;
}
</style>
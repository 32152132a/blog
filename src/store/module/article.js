export default {

  state: {
    articleType: ['java', 'git', 'js', 'css3', 'less', 'canvas', 'sql', 'html5', 'node', 'webpack'],
    articleCategory: ['技术', '笔记', '作品', '收藏'],
    article_id: '',

  },
  getters: {
    getArticle: (state) => {
      return {
        articleType: state.articleType,
        articleCategory: state.articleCategory,
        articleId: state.article_id
      }
    }
  },
  actions: {}
}
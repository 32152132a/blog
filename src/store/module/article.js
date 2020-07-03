import {
  allArticle,
  getArticle,
  addArticle,
  deleteArticle,
  uptateArticle
} from '@/axios/api/article'
export default {

  state: {
    articleType: ['java', 'vue', 'git', 'js', 'css3', 'less', 'canvas', 'sql', 'html5', 'node', 'webpack'],
    articleCategory: ['技术', '笔记', '作品', '收藏'],
    article_id: '',
    articleList: [],
    isArticleList: false
  },
  getters: {
    getArticle: (state) => {
      return {
        articleType: state.articleType,
        articleCategory: state.articleCategory,
        articleId: state.article_id
      }
    },
    getIsArticleList: (state) => {
      return state.isArticleList
    },
    getArticleList: (state) => {
      return state.articleList
    }
  },
  mutations: {

    /**
     * [setLogin 设置登录信息状态]
     */
    setArticleList(state, data) {
      state.articleList = data
      state.isArticleList = true
    },
    setIsArticleList(state, data) {
      state.isArticleList = data
    }
  },
  actions: {

    async handleUptateArticle({
      commit
    }, data) {
      let article = await uptateArticle(data)
      commit('setIsArticleList', false)
      return article
    },
    async handleDeleteArticle({
      commit
    }, data) {
      let article = await deleteArticle(data)
      commit('setIsArticleList', false)
      return article
    },
    async handleGetArticle({
      commit
    }, data) {
      let article = await getArticle(data)
      commit('setIsArticleList', false)
      return article
    },
    async handleAddArticle({
      commit
    }, data) {
      let article = await addArticle(data)
      commit('setIsArticleList', false)
      return article
    },
    async handleArticles({
      commit,
      state
    }, data) {
      if (state.isArticleList) {
        return state.articleList
      } else {
        let article = await allArticle(data)
        commit('setArticleList', article.data)
        commit('setIsArticleList', true)
        return article.data
      }
    },
  }
}
import axios from "./../config";
export const addArticle = params => {
  return axios.httpServer({
    url: '/api/article/addArticle',
    method: 'post'
  }, params)
}

export const allArticle = params => {
  return axios.httpServer({
    url: '/api/article/allArticle',
    method: 'get'
  }, params)
}
export const getArticle = params => {
  return axios.httpServer({
    url: '/api/article/getArticle',
    method: 'get'
  }, params)
}
export const deleteArticle = params => {
  return axios.httpServer({
    url: '/api/article/deleteArticle',
    method: 'delete'
  }, params)
}
export const uptateArticle = params => {
  return axios.httpServer({
    url: '/api/article/uptateArticle',
    method: 'post'
  }, params)
}
import axios from "./../config";
export const addArticle = params => {
  return axios.post(
    '/api/article/addArticle', params
  )
}

export const allArticle = params => {
  return axios.get(
    '/api/article/allArticle', params
  )
}
export const getArticle = params => {
  console.log(params)
  return axios.get(
    '/api/article/getArticle', params
  )
}
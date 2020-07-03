import axios from "./../config";
export const userLogin = params => {

  return axios.httpServer({
    url: '/api/users/login',
    method: 'post'
  }, params)
}
export const users = params => {

  return axios.httpServer({
    url: '/api/users/current',
    method: 'get'
  }, params)
}
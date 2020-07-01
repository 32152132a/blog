import axios from "./../config";
export const userLogin = params => {
  return axios.post(
    '/api/users/login', params
  )
}
export const users = params => {
  return axios.get(
    '/api/users/current', params
  )
}
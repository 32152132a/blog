import {
  userLogin,
  users
} from '@/axios/api/login'


export default {
  /**
   * [state 状态]
   * @param {Boolean} loginDialogVis      登录弹窗状态
   */
  state: {
    loginDialogVis: false,
    isLogin: false,
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username') || '',
    userinfo: localStorage.getItem('userinfo') && localStorage.getItem('userinfo') !== 'undefined' ?
      JSON.parse(localStorage.getItem('userinfo')) : {},
    id: '5ef75a6299d6040b785444fc',
    name: 'qyq',
    emali: '1611042821@qq.com',
    avatar: '//www.gravatar.com/avatar/6812bbadcf52b6ef6b5ad14f90f0be9c?s=200&r=pg&d=mm'
  },
  /**
   * [mutations]
   */
  mutations: {
    /**
     * [ckeckLogin 检测是否登录]
     * @return {Boolean}         [返回登录状态]
     */
    ckeckLogin(state, boolean) {
      state.isLogin = boolean
      localStorage.setItem('islogin', boolean)
    },

    /**
     * [setLogin 设置登录信息状态]
     */
    setLogin(state, data) {
      console.log(data)
      state.avatar = data.avatar
      state.isLogin = true
    },
  },
  getters: {
    getUser(state) {
      return {
        id: state.id,
        isLogin: state.isLogin,
        emali: state.emali,
        avatar: state.avatar,
        name: state.name
      }
    }

  },
  /**
   * [actions]
   */
  actions: {
    /**
     * [toggleLoginDialog 切换登录弹窗]
     */

    /**
     * [handleUserLogin 用户登录]
     * @return
     */
    handleUserLogin(state, data) {
      return new Promise((resolve, reject) => {
        userLogin(data)
          .then(res => {
            resolve(res)
            localStorage.setItem('token', res.data.token)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    /**
     * 获取token 在获取用户信息
     */
    async handleUsers(state, data) {

      let token = await userLogin(data)
      localStorage.setItem('token', token.data.token)
      let usesData = await users().then(res => {
        return res.data
      })

      state.commit('setLogin', usesData)
    },



  }
}
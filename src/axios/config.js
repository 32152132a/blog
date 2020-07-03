import axios from "axios";
import {
  Message,
  Loading
} from "element-ui";
import router from "../router";

let loading; //定义loading变量

function startLoading() {
  //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)"
  });
}

function endLoading() {
  //使用Element loading-close 方法
  loading.close();
}

// 请求拦截  设置统一header
axios.interceptors.request.use(

  config => {
    // 加载
    startLoading();
    config.headers.Authorization = `${localStorage.token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截  401 token过期处理
axios.interceptors.response.use(
  response => {
    endLoading();

    return response;
  },
  error => {
    // 错误提醒
    endLoading();
    Message.error('获取信息失败');
    const {
      status
    } = error.response;

    if (status == 401) {

      // Message.error("token值无效，请重新登录");
      // // 清除token
      // localStorage.removeItem("eleToken");

      // 页面跳转
      router.push("/");
    }
    //  else if (
    //   error.response.status === 403 ||
    //   error.response.status === 404 ||
    //   error.response.status === 500
    // ) {
    //   // 跳转对应的错误页，只存在403、404、500
    //   router.push(`/exception/${error.response.status}`)
    // }


    return Promise.reject(error);
  }
);


/**
 * [errorState 错误状态]
 * @param  {Blooean} showToast    是否显示toast
 * @return
 */
function errorState(response, showToast) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    !showToast && toast(response.data.msg || response.data.message || '网络异常')
    return response.data
  } else {
    return {
      status: -404,
      msg: '网络异常'
    }
  }
}

function successState(res) {
  // 统一判断后端返回的错误码
  if (res.data && (res.data.code === 200 || res.data.code === 9100)) {
    return true
  } else {
    res.data === 'object' && toast(res.data.msg || res.data.message || '网络异常')
  }
}

/**
 * [toast 弹窗]
 * @param  {String} text     内容
 * @param  {Number} duration 延迟
 * @return
 */
function toast(text, duration) {
  let div = document.createElement('div')
  let txtCnt = ''

  if (toast.busy) return
  toast.busy = true
  duration = duration || 3000
  setTimeout(() => {
    toast.busy = false
  }, duration)

  if (typeof text === 'object') {
    text.forEach(item => {
      for (let key in item) {
        txtCnt += `<p class="toast-cnt-p">${item[key]}</p>`
      }
    })
  } else {
    txtCnt = text
  }

  Object.assign(div.style, {
    boxSizing: 'border-box',
    padding: '8px 16px',
    display: 'table',
    color: '#fff',
    fontSize: '13px',
    lineHeight: 1.7,
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    '-webkit-transform': 'translateX(-50%)',
    '-ms-transform': 'translateX(-50%)',
    boxShadow: '0 2px 7px rgba(0, 0, 0, 0.2)',
    '-webkit-box-shadow': '0 2px 7px rgba(0, 0, 0, 0.2)',
    minWidth: '110px',
    maxWidth: '240px',
    textAlign: 'center',
    borderRadius: '5px',
    zIndex: 9999999,
    background: 'rgba(0, 0, 0, 0.78)'
  })
  div.classList.add('toast-global')
  div.innerHTML = txtCnt
  document.body.appendChild(div)

  setTimeout(() => {
    div.parentNode && div.parentNode.removeChild(div)
  }, duration)
}

/**
 * [deployUse 添加公共参数]
 * @param  {Obj} data 参数
 *               data.timestamp [时间戳]
 * @return {Obj}
 */
function deployUse(data = {}) {
  // data.timestamp = new Date().getTime()
  return data
}

/**
 * [配置axios]
 * @param  {Obj} opts 配置
 *               opts.method 请求方式 [*必填]
 *               opts.baseURL axios默认url
 *               opts.url 请求url [*必填]
 *               opts.headers 请求headers
 * @param  {Obj} data 请求数据
 * @return {Obj} res
 */
const timeout = 30 * 1000
const httpServer = (opts, data) => {
  // 设置默认headers
  let headers = {}
  // 控制toast显示，默认值false
  let showToast = opts.showToast || false

  // http默认配置
  let httpDefaultOpts = {
    method: opts.method, // 必填
    baseURL: opts.baseURL || process.env.VUE_APP_API,
    url: opts.url, // 必填
    timeout: timeout,
    headers: Object.assign(headers, opts.headers)
  }

  if (opts.method === 'get') {
    httpDefaultOpts.params = deployUse(data)
  } else {
    httpDefaultOpts.data = deployUse(data)
  }

  let promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then(res => {
        successState(res)
        resolve(res)
      })
      .catch(response => {
        errorState(response, showToast)
        reject(response)
      })
  })

  return promise
}

export default {
  httpServer
}
export default {
    install(Vue)
    {
      Vue.prototype.ossSrc = function () {
         return 'https://website-oss.oss-cn-beijing.aliyuncs.com/common/blogs/';
      }();
    }
  }
  
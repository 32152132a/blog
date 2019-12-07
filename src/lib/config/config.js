export default {
    install(Vue)
    {
      Vue.prototype.ossSrc = function () {
         return 'https://website-oss.oss-cn-beijing.aliyuncs.com/common/blogs/';
      }();
      window.addEventListener('mousedown',(event)=>{
        //增加点击光圈
        let e = event || window.event
        let div = document.createElement('div')
        let body = document.querySelector('body')
        const bodyCss=`position:relative`
        const divCss=`left:${e.pageX}px;top:${e.pageY}px;`
        body.style.cssText = bodyCss
        div.style.cssText = divCss
        div.classList.add('divClass')
        setTimeout((div)=>{
          body.removeChild(div)
        },500,div)
        body.appendChild(div) 
      })
    }
  }
  
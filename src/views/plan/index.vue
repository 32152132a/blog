<template>
   <div class='plan'>

    <el-steps direction="vertical" :active='active'>
      <el-step :title="item.title" :description='item.summary' v-for="(item,value) in steps" :key='value'></el-step>
    </el-steps>

  </div>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        { title: '开始步入大学学习', summary: '高中毕业步入大学', data: '2015-08-01' },
        { title: '学习c++ , 计算机基础，数据结构算法与分析的专业科目', summary: '大一开始学习专业知识', data: '2010-07-01' },
        { title: 'html5，css, js 等基础知识', summary: '大二开始努力学习，上学期遇到个好老师，但是待到一年就走了，现在还能想到，在校期间代码20万行以上，毕业不愁找工作，可以按照自己的想法写一下页面，运用基础知识，谢了勒索病毒界面，出售舍友界面等简单的html界面', data: '2010-07-01' },
        { title: 'js 加深知识', summary: '大二下学期运用基础知识,学校不知道哪里聘请了一个交网页的老师，其实就是交js的老师，是个考研的学生，不过当初学的挺认真，现在还有教程素材', data: '2010-07-01' },
        { title: '初步接触工作室项目', summary: '大三上学期进入工作室，开始和学姐一起合作，做学姐的毕设，一般上午上课，下午进工作室做项目，一个寒假差不多把js忘的差不过，学长给了我一套学习视频，尚学堂的，每天晚上自学js 打代码看视频，到熄灯睡觉，白天上课，做项目应用，开始第一次接触java 后端，开始了解接口跨域等问题', data: '2010-07-01' },
        { title: 'bootstrap', summary: '利用暑假的时候，怕自己像上次寒假似的忘的一干二净，开始每天复习，开始做自己想做的页面，自学的bootstrap，做了第一个简历网站，买的阿里云服务器', data: '2010-07-01' },
        { title: 'java后端，前端搭建，前后端交互', summary: '大三下学期担任五人小组组长，做学校的点餐系统项目，根据上学期学长给的学习视频，和一些网上找的资料，自学java，从0到1，承担了项目的java后端，mysql使用，并和组员一起开发前端', data: '2010-07-01' },
        { title: 'jquery，canvas，js高级（原型等）', summary: '在工作室做项目，开始运用自学的jquery，来写工作室项目，并在晚上的时间，自学canvas和深入js', data: '2010-07-01' },
        { title: '负责学校项目开发', summary: '大四上学期和两个大三，二个大四，组成五人小队，担任小组组长，做学校的教务系统的项目，负责java后端开发，和部分前端页面搭建，上届给学校做项目，项目可以直接当做毕设，结构到了我们这届突然说不可以了，做了大半学期了，突然不能做毕设了，需要重新写一份，淦', data: '2010-07-01' },
        { title: 'websocket，协议', summary: '开始做毕设，自学websocket，基于websocket做了一个实时通信app', data: '2010-07-01' },
        { title: '女朋友', summary: '单身22年，临近毕业找了个女朋友，是同班同学', data: '2010-07-01' },
        { title: '公司实习', summary: '大四下学期，开始实习，2019.01.07 去往北京的的车票，我现在还留着，和女朋友一起在陌生的城市找工作，还记得的在北京天安门的大力宾馆，住了好多天，01.23 开始在天赋通公司实习，也不知道我当初选择的对还是错，经理挺好的，公司氛围也特好，每天有说有笑的，工作上也挺积极的，运用jquery，和css3，来制作h5 交互课件，第一次接触js游戏这方面，所有的逻辑都是自己想的，用于js实现，挺锻炼自己的逻辑能力的，遇到一个前端同事，因为是要一起合作的，在他身上学到了css3动画的思想，以前也学过css3动画，但是从来没有想过在项目中怎么用，就是简单用过hover', data: '2010-07-01' },
        { title: '接触 webpack，vue，es6', summary: '越来越发现公司和自己的发展方向不一致，一直运用基础的js，css，以后只能做个切图仔，在转正后的半个月提了离职，毕业后，在自己的小屋子学习vue，webpack，小程序等知识，发现自己的世界窄了好多', data: '2010-07-01' },
        { title: 'vue-cli3，vue全家桶项目，less，element-ui，接触git', summary: '在本能心脑公司，开始做vue的项目，也是开始用 vue-cli3 搭建项目，也开始熟悉了token ，调试，打包上传，写了第二版简历网站', data: '2010-07-01' },
        { title: 'node，和项目规范', summary: '因为疫情在家办公期间，因为省去了路上的时间，在家的时间多了起来，在腾讯课堂和网易云课堂自学了node', data: '2010-07-01' },
        { title: '深入学习了js知识体系 ， git', summary: '公司因为疫情倒闭，被迫找工作，看了好多文档，博客学习，发现了慕课网的教学视频，讲的非常好，于是根据视频内的微信号，买了一系列视频，内的知识点没有讲的那么深需要自己去深入挖掘的', data: '2010-07-01' },
        { title: 'js深入', summary: '作用域，闭包，原型链，事件循环，异步同步，迭代器，this，原理，性能优化', data: '2010-07-01' },
        { title: 'vue原理', summary: 'mvvm，双向数据绑定，虚拟dom，diff，性能优化', data: '2010-07-01' },
        { title: '网站博客搭建', summary: '运用 node mongdb vue element-ui less git 技术搭建', data: '2010-07-01' },
        { title: 'vue-cli3,和webpack各种环境配置和常见问题一部分', summary: '', data: '2010-07-01' },
        { title: 'ts', summary: '看视频学习ts', data: '2010-07-01' },
        { title: 'react', summary: '', data: '2010-07-01' },
        { title: '微信小程序', summary: '', data: '2010-07-01' },
      ],
      active: 20
    }
  }

}

</script>

// eslint-disable-next-line no-irregular-whitespace
<style lang="less" scoped>
.plan {
  padding: 20px;
  &/deep/ .el-step__title.is-finish {
    color: #000;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
  }
  &/deep/ .el-step__description.is-finish {
    color: #f1f1f1;
    font-size: 16px;
    margin-bottom: 40px;
  }
}
</style>
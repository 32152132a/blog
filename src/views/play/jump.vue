<template>
  <div class="jump">
    <div class="play">
      <div class="my">
        <img ref='my' :src="my_src" @animationend='clearAnmn' :class='{anmn:my_isAnmn}' alt />
      </div>
      
      <div class="obstacle" ref='obat'>
        <img
          v-for="item in obstacleList"
          :class='{"obs-anmn":isMove}'
          @animationend='clearMove'
          :key="item.id"
          :src="item.src"
          :style="{left:`${item.left}px`,top:`${item.top}px`}"
          alt
        />
      </div>
    </div>
    <div class="btn">
      <el-button @click="state">开始</el-button>
      <span>  {{playTime}}s</span>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      
        my_isAnmn:false,
        playTime:0,
        stateTime:0,
        my_src:
          "http://96qufei.oss-cn-beijing.aliyuncs.com/jump/my.png?OSSAccessKeyId=LTAI7pL4ck15E9fC&Expires=5195663042&Signature=SKxMAblxWtwluSdhXkzJe8HfQdA%3D",
      
      isPlay:true,
      isMove:true,
      obstacle: [
        {
          top: -0,
          left: 600,
          src:
            "http://96qufei.oss-cn-beijing.aliyuncs.com/jump/obstacle-1.png?OSSAccessKeyId=LTAI7pL4ck15E9fC&Expires=3601595507421&Signature=iG1eNcQbUfTrnl66gqjcYpzZy70%3D",
        },
        {
          top: -0,
          left: 600,
          src:
            "http://96qufei.oss-cn-beijing.aliyuncs.com/jump/obstacle-3.png?OSSAccessKeyId=LTAI7pL4ck15E9fC&Expires=1955663917&Signature=XES4g7Wqy8s8%2Fews%2FO3lyqa72Hg%3D",
        },
        {
          top: -50,
          left: 600,
          src:
            "http://96qufei.oss-cn-beijing.aliyuncs.com/jump/obstacle-2.png?OSSAccessKeyId=LTAI7pL4ck15E9fC&Expires=361595663472&Signature=Jrog5EWRQPIg4kWbAagGTDuHYy4%3D",
        },

      ],
      obstacleList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    myJump() {
      this.my_isAnmn = true
    },
    clearAnmn(){
      this.my_isAnmn = false
    },
    clearMove(){
      // this.$set(this,'obstacleList',this.obstacleList.slice(1))
      // console.log(index)
      // console.log(this.obstacleList)      
      this.isObstacle(this.myOf(),this.obstacleOf()) //碰撞检测
      this.obstacleList.splice(0,1)
       
    },
    state() {
      
      this.obstacleList=[]
      this.stateTime = 0
      this.playTime = 0
      this.stateTime = Date.now()

      clearInterval(this.isPlay)
      this.isPlay = setInterval(() => {
        let random = Math.floor(Math.random() * this.obstacle.length);
        // console.log({ ...this.obstacle[random] })
        // console.log({id:Date.now()})
        this.obstacleList.push({ ...this.obstacle[random],...{id:Date.now()}});
        // console.log(this.obstacleList)
      },1200);
    },
    myOf(){
      if(this.$refs.my){
        return {top:this.$refs.my.offsetTop,bottom:this.$refs.my.offsetTop - 30}
      }
    },
    isObstacle(m,o){
      // {top: -21, bottom: 9} {top: -50, bottom: -10}
      // {top: 0, bottom: 30} {top: -50, bottom: -10}
      // top: 0, bottom: 30} {top: 0, bottom: 40}
      // console.log(m,o)
      if(o.top<m.bottom||o.bottom>m.top){
      }else{
        this.$message({
          message: '彭,请重新开始',
          type: 'error'
        });
        this.playTime = Math.floor((Date.now() - this.stateTime)/1000)
        this.stop()
      }
    },
    stop(){
      clearInterval(this.isPlay)
      this.obstacleList=[]
    },
    obstacleOf(){
       if(this.$refs.obat){
        return {top:this.$refs.obat.children[0].offsetTop,bottom:this.$refs.obat.children[0].offsetTop - 40}
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
    let that = this;
    document.onkeydown = function (e) {
      //对整个页面文档监听
      e.preventDefault();
      if (e.keyCode == 32) {
        that.myJump();
      }
    };
  },
};
</script>

<style lang="less" scoped>
.jump {
  width: 600px;
  height: 350px;
  margin: 50px auto 0 auto;
  // background-color: #fff;
  overflow: hidden;
  .play {
    .my {
      img {
        width: 30px;
        height: 30px;
        position: relative;
        vertical-align: top;
        top: 5px;
      }
      .anmn {
        animation: jump 1s 1;
      }
      @keyframes jump {
        0% {
          top: 0px;
        }
        40% {
          top: -50px;
        }
        60% {
          top: -50px;
        }
        100% {
          top: 0px;
        }
      }
    }
    .obstacle {
      img {
        width: 40px;
        height: 40px;
        top: 0;
        position: absolute;
      }
      .obs-anmn {
        animation: move 3s 1 linear;
      }
      @keyframes move {
        0% {
          left: 600px;
        }
        100% {
          left: 0px;
        }
      }
    }
    padding: 0 10px;
    border-bottom: 2px solid #000;
    margin-top: 60px;
    position: relative;
  }
  .btn {
    margin: 10px 0;
    margin-top: 100px;
    text-align: center;
    span{
      transform: scale(0.5);
      display: inline-block;
      color: red;
    }
  }
}
</style>
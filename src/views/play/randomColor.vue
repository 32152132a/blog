<template>
  <div>
    <div class='error'>
      <span v-for='item in errorSize' :key='item'>x</span>
    </div>
      <div class='play' :style="{'background':judgmentColor}">

      <div v-for='(item,value) in children' @click="keyColor(value)" :style="{'background':item.color}" :key='value'>
      </div>
    </div>
    <div class="btn">
      <el-button @click="state">开始</el-button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: ['red', 'yellow', 'blue', '#000'],
      index: 0,
      children: [
        { color: '#fffff1', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
      ],
      errorSize: 0,
      judgmentColor: 'yellow',
      time: ''
    }
  },
  methods: {
    state () {
      this.index = 0
      this.errorSize = 0
      this.over()
      clearInterval(this.time)
      this.time = setInterval(() => {
        if (this.index >= 1) {
          let a = this.children[this.index - 1].color
          //  this.children[this.index].result = this.children[this.index].color
          this.children[this.index - 1].color = this.children[this.index - 1].result
          this.children[this.index - 1].result = a
        }
        if (this.index >= 25) {
          clearInterval(this.time)
          this.judgment()
        } else {
          let randomColor = this.color[Math.floor(Math.random() * this.color.length)]
          this.children[this.index].result = this.children[this.index].color
          this.children[this.index].color = randomColor
          this.index++
        }
      }, 100);
    },
    judgment () {
      this.judgmentColor = this.color[Math.floor(Math.random() * this.color.length)]
      let child = this.children
      this.children = []
      setTimeout(() => {
        this.children = child
      }, 1000);
      console.log()
    },
    keyColor (index) {
      if (this.children[index].result == this.judgmentColor) {
        this.children[index].color = this.judgmentColor
        this.map()
      } else {
        if (this.errorSize > 2) {
          this.$message({
            message: '选择错误请重新点击开始',
            type: 'error'
          });
          this.over()
        } else {
          this.errorSize++
        }


      }
    },
    over () {
      this.children = [
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
        { color: '#fafafa', result: '' },
        { color: '#ffffff', result: '' },
      ]
    },
    map () {
      if (this.children.filter((item) => {
        return item.result == this.judgmentColor
      }).every((item) => {
        return item.color == this.judgmentColor
      })) {
        this.$message({
          message: '牛皮',
          type: 'success'
        });
      }

    }
  },
  mounted () {
  }
}

</script>
<style lang="less" scoped>
.play {
  display: grid;
  width: 400px;
  height: 400px;
  gap: 10px solid #ddd;
  margin: 10px auto;
  margin-bottom: 10px;
  -ms-layout-grid-line: red;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  div {
    width: 100%;
    // height: 100%;
    padding-bottom: 100%;
    background-color: #fff;
  }
  div:nth-child(2n) {
    background-color: #fafafa;
  }
}
.error {
  height: 30px;
  text-align: center;
  span {
    color: red;
    display: inline-block;
    margin: 0 10px;
  }
}
.btn {
  text-align: center;
}
</style>

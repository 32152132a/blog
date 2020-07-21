<template>
  <div class='play'>

    <router-link class='tab' v-for='(item,value) in directory' :key='value' :to='item.router'>

      <h3>{{item.title}}</h3>
      <span>{{item.summary}}</span>

    </router-link>

  </div>
</template>

<script>
export default {
  data () {
    return {
      directory: [
        { title: '颜色速记', summary: '随机产生颜色块，记住所有指定颜色块的位置即可胜利,灵感来源于看密室逃脱里的一个解密游戏', router: '/Index/play/randomColor' },
        { title: '等式成立', summary: '正在开发中...', router: '/Index/play/randomColor' },
      ]
    }
  }
}

</script>
<style lang="less" scoped>
.play {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: center;
  .tab {
    text-decoration: none;
    width: 150px;
    height: 150px;
    background-color: #fff;
    // color: #333;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #666;
    // text-align: center;
    font-size: 12px;
    color: #666;
    transition: 0.5s all;
    h3 {
      text-align: center;
      font-size: 16px;
      margin: 10px 0;
    }
    &:hover {
      transform: scale(1.1);
      background-color: #f1f1f1;
    }
  }
}
</style>
<!--  -->
<template>
  <div class='nav'>
    <!-- <object type="application/x-shockwave-flash" style="outline:none;"
      data="http://cdn.abowman.com/widgets/hamster/hamster.swf?up_bodyColor=000000&amp;up_feetColor=D4B898&amp;up_eyeColor=FFFFFF&amp;up_wheelSpokeColor=000000&amp;up_wheelColor=FFFFFF&amp;up_waterColor=66CDAA&amp;up_earColor=FFFFFF&amp;up_wheelOuterColor=000000&amp;up_snoutColor=FFFFFF&amp;up_bgColor=F5DEB3&amp;up_foodColor=000000&amp;up_wheelCenterColor=000000&amp;up_tailColor=FFFFFF&amp;"
      width="80" height="64">
      <param name="movie"
        value="http://cdn.abowman.com/widgets/hamster/hamster.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2E&amp;up_tailColor=E6DEBE&amp;">
      <param name="AllowScriptAccess" value="always">
      <param name="wmode" value="opaque"></object> -->
    <!-- <div><a href="">登录</a><span>注册</span></div> -->
    <div class='nav-header'>
      <img :src="imgSrc" alt="">
      <router-link to="/login" v-text='isLogin?"登录":"qyq"'></router-link>
    </div>

    <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
      <el-menu-item index="/"> <i class='el-icon-link'></i>作品链接</el-menu-item>
      <el-menu-item index="/Index/content"><i class='el-icon-folder'></i>文章合集</el-menu-item>
      <el-menu-item index="/Index/about"><i class='el-icon-user'></i>关于作者</el-menu-item>
      <el-menu-item index="/Index/LeaveAMessage"><i class='el-icon-phone-outline'></i>作者留言</el-menu-item>
      <el-menu-item index="/Index/plan"><i class='el-icon-date'></i>作者计划</el-menu-item>
      <el-menu-item index="/Index/play"><i class='el-icon-link'></i>无聊游戏</el-menu-item>
      <el-menu-item index="/Index/backstage" :disabled='isLogin'><i class='el-icon-edit'></i>编辑笔记</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  components: {
  },
  computed: {
    isLogin () {
      return !this.$store.getters.getUser.isLogin
    },
    name () {
      return !this.$store.getters.getUser.name
    },
    imgSrc () {
      return this.$store.getters.getUser.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  methods: {
    handleSelect () {
    }
  }
}
</script>
<style scoped lang='less'>
.nav {
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  border-radius: 10px;
  color: #333;
  .nav-header {
    display: flex;
    height: 60px;
    align-items: center;
    padding-left: 20px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 10px;
    }
    border-bottom: 1px solid #ddd;
  }
  .el-menu-demo {
    // text-align: center;

    background-color: transparent;
    .el-menu-item {
      height: 40px;
      width: 100%;
      line-height: 40px;
      color: #666;
      text-align: left;
    }
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: 0px;
  }
}
a {
  text-decoration: none;
}

@media (max-width: 800px) {
}
</style>
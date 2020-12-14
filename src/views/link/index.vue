<template>
  <div class='table'>

    <el-table :data="tableData" style="width: 100%" :header-cell-style='style' :row-style='style'>
      <el-table-column prop="name" label="网址" width="">
      </el-table-column>
      <el-table-column prop="describe" label="描述" width="">
      </el-table-column>
      <el-table-column label="链接">
        <div slot-scope="scope">
          <a :href="scope.row.link">{{scope.row.link}}</a>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '华夏悠选平台端',
          link: 'https://yx-web-cs.hxfybj.net/home',
          describe: '数据商城平台端 测试账户 qqq 123'
        },
        {
          name: '华夏悠选商户端',
          link: 'https://yx-mgt.hxfybj.net/system/public/login',
          describe: '数据商城商户端'
        },

        {
          name: '后台管理系统',
          link: 'http://www.96qufei.cn/web-admin/',
          describe: '主要对各个网站，页面的新闻资讯，课本，课件等数据进行操作处理'
        },

        {
          name: '手机端课件点读',
          link: 'http://k12.bnxnjy.com/ ',
          describe: '手机端app 在线看视频，在线点读视频'
        }, {
          name: '点读游戏',
          link: 'http://tool.bnxnjy.com/',
          describe: '点读益智小游戏'
        }, {
          name: '皮纹网站',
          link: 'http://test.bnynkf.com/   ',
          describe: '公司网站'
        }
        , {
          name: '耳机网站',
          link: 'http://www.bnynkf.com/',
          describe: '公司网站'
        }
        , {
          name: '汽车贷款网站',
          link: 'http://www.rhzhineng.com',
          describe: '公司网站'
        }],
      style: { background: "rgba(255, 255, 255, 0.6)", color: "#555" }
    }
  }
}
  </script>
  <style scoped>
.table {
  /* background-color: rgba(255, 255, 255, 0.3); */
  /* background: transparent; */
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  color: #555;
}
.el-table {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #555;
}
</style>
<!--  -->
<template>
    <div class='content'>
        <div>
            <div class='chunk' v-for='(item,value) in 4' :key='value'>
                <div class="chunk-header">
                    常用的兼容旧环境的代码段
                </div>
                <div class="chunk-content">
                    <div class="chunk-introduce">
                        <i class="el-icon-user-solid"></i>
                        <span>曲永庆</span>
                        <el-divider direction="vertical"></el-divider>
                        <i class="el-icon-watch"></i>
                        <span>2018-05-07</span>
                        <el-divider direction="vertical"></el-divider>
                        <i class="el-icon-price-tag"></i>
                        <span>ES6</span>
                        <el-divider direction="vertical"></el-divider>
                        <i class="el-icon-lollipop"></i>
                        <span>喜欢</span>
                        <el-divider direction="vertical"></el-divider>
                        <i class="el-icon-chat-line-round"></i>
                        <span>评论</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="chunk-describe">
                        <div class='chunk-describe-img'>
                            <el-image style="width: 100px; height: 100px"
                                src="https://website-oss.oss-cn-beijing.aliyuncs.com/common/img/doubt.png" fit="fill"
                                lazy>
                            </el-image>
                        </div>
                        <div class='chunk-describe-content'>
                            13.4 Spider 的用法 在 Scrapy 中，要抓取网站的链接配置
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        components: {
        },
        data() {
            //这里存放数据
            return {

            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {

        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

        },
        beforeCreate() {}, //生命周期 - 创建之前
        beforeMount() {}, //生命周期 - 挂载之前
        beforeUpdate() {}, //生命周期 - 更新之前
        updated() {}, //生命周期 - 更新之后
        beforeDestroy() {}, //生命周期 - 销毁之前
        destroyed() {}, //生命周期 - 销毁完成
        activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style scoped>
    .chunk {
        background-color: #fff;
        padding: 10px 20px;
        margin: 10px 0;
    }

    .chunk-header {
        /* font-size: 2rem; */
        font-size: 1.17em;
        color: #2c3e50;
        font-weight: bold;
        margin: 10px 0 20px 10px;
    }

    .chunk-describe-img {
        text-align: center;
    }

    .chunk-introduce {
        font-size: 0.8rem;
        color: #666;
        font-weight: '楷体';
    }

    .chunk-introduce i {
        color: #aaa;
        margin: 0 5px;
    }

    .chunk-describe {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .chunk-describe-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
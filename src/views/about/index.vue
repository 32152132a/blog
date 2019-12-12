<template>
    <div class='about'>
        <div class='personage'>
            <div class="about-header">
                关于自己
            </div>
            <div class="about-describe">
                <div>博主是一个接地气的屌丝程序猿，努力全栈攻城狮</div>
                <div>跟很多95后IT同龄人一样，喜欢折腾，喜欢研究。其实很早就想单独开立自己的博客，但是由于各种原因。。。所以。。。</div>
                <div>互联网领域的知识学无止境，博主也是在一步步的追随着各种新的技术，get各种新的技能来提升自身能力，丰富博客的内容。</div>
            </div>
        </div>
        <div class='technology'>
            <div class="about-header">
                博主技术栈
            </div>
            <div class='about-technology'>
                <DataV></DataV>
                <Echarts></Echarts>
            </div>
        </div>
    </div>
</template>

<script>
    import Echarts from './echarts'
    import DataV from './dataV.vue'
    export default {
        components: {
            'Echarts':Echarts,
            'DataV':DataV
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
    .about{
        background-color: #fff;
        padding: 20px;
    }
    .about-header{
        color: #333;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;
        font-weight: '微软雅黑';
        margin: 20px 0;
    }
    .about-describe{
        font-size: 0.8rem;
        color: #666;
        padding: 0 5%;
    }
    .about-describe div{
        margin: 8px 0;
    }
    .about-technology{
        text-align: center; 
        font-size: 30px;
        color: #888;
    }
</style>
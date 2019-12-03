
<template>
<div class=''>
    <v-header></v-header>
    <v-nav></v-nav>
    <!-- <v-content></v-content> -->
    <div class='Index'>
        <router-view/>
        <sidebar></sidebar>
    </div>
</div>
</template>

<script>
import header from '@/views/header/index'
import nav from '@/views/navtab/index'
import sidebar from '@/components/sidebar'
// import content from '@/views/content/index'
export default {
components: {
    'v-header':header,
    'v-nav':nav,
    'sidebar':sidebar
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
    .Index {
        display: grid;
        grid-template-columns: 1fr 250px;
        align-content: space-evenly;
        padding: 10px 20px;
        gap: 20px;
    }
</style>
<!--  -->
<template>
    <div class='nav'>

        <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
            <el-menu-item index="/Index/content" >编辑笔记</el-menu-item>
            <el-menu-item index="/Index/about">打赏作者</el-menu-item>
            <el-menu-item index="/Index/about">关于作者</el-menu-item>
            <el-menu-item index="/Index/about">给言</el-menu-item>
        </el-menu>

        <!-- <ScrollBar></ScrollBar> -->

    </div>
</template>

<script>
    // import ScrollBar from '@/components/ScrollBar'
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        components: {
            // ScrollBar
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    .nav {
        padding: 0 10%;
        background-color: #fff;
        text-align: center;
    }

    .el-menu-demo {
        text-align: center;
    }
</style>
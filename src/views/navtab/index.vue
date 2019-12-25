<!--  -->
<template>
    <div class='nav'>
        <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/hamster/hamster.swf?up_bodyColor=000000&amp;up_feetColor=D4B898&amp;up_eyeColor=FFFFFF&amp;up_wheelSpokeColor=000000&amp;up_wheelColor=FFFFFF&amp;up_waterColor=66CDAA&amp;up_earColor=FFFFFF&amp;up_wheelOuterColor=000000&amp;up_snoutColor=FFFFFF&amp;up_bgColor=F5DEB3&amp;up_foodColor=000000&amp;up_wheelCenterColor=000000&amp;up_tailColor=FFFFFF&amp;" width="80" height="64">
            <param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2E&amp;up_tailColor=E6DEBE&amp;">
            <param name="AllowScriptAccess" value="always">
            <param name="wmode" value="opaque"></object>
        <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
            <el-menu-item index="/Index/backstage" >编辑笔记</el-menu-item>
            <el-menu-item index="/Index/about">打赏作者</el-menu-item>
            <el-menu-item index="/Index/content">关于作者</el-menu-item>
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
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10%;
        background-color: #fff;
        text-align: center;
    }

    .el-menu-demo {
        text-align: center;
        margin: 0 20px;
    }
</style>
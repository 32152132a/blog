<template>
    <div class='echart'>
        <div id="pieChart" class="chart-container"></div>
    </div>
</template>

<script>
    import Echarts from 'echarts'
    export default {
        data() {
            return {
                pieCharts: null,
                pieOption: {
                    title: {
                        text: '星级分布'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: true,
                        label: {
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        data: [{
                                value: 335,
                                name: '前端'
                            },
                            {
                                value: 310,
                                name: 'vue'
                            },
                            {
                                value: 234,
                                name: '交互'
                            },
                            {
                                value: 135,
                                name: '后端'
                            }
                        ]
                    }]
                }
            }
        },
        mounted() {
            
            this.$nextTick(() => {
                this.pieCharts = Echarts.init(document.getElementById('pieChart'))
                this.pieCharts.setOption(this.pieOption)
                window.addEventListener('resize', this.handleResize)
            })
        },
        methods: {
            handleResize() {
                this.pieCharts.resize()
            },
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
            this.pieCharts.dispose()
        }
    }
</script>
<style scoped>
    .chart-container {
        border-radius: 4px;
        height: 400px;
        background: #fff;
        box-shadow: 0 1px 10px 2px rgba(182, 191, 196, 0.5);
        padding: 20px;
    }
</style>
<template>
  <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" @select="handleSelect">
    <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick">
    </i>
  </el-autocomplete>
</template>

<script>
export default {
  data () {
    return {
      restaurants: [],
      state: '',
      timeout: null
    };
  },
  methods: {
    querySearchAsync (queryString, cb) {
      this.handleLists()
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect (item) {
      this.$router.push({ path: '/article', name: 'article', query: { id: item.id } }).then(res => {

      })
    },
    handleLists () {

      this.$store.dispatch('handleArticles').then(res => {
        this.restaurants.length = 0
        res.map(k => {
          this.restaurants.push({ value: k.title, id: k._id })
        })
      })
    },
    handleIconClick () { }

  },
  watch: {
    //  state: {
    //     handler () {

    //     },
    //     deep: true,
    //     immediate: true
    //   }
  },
  mounted () {
    // this.restaurants = this.loadAll();
    //判断数据是否是最新的
  }
};
</script>
<style scoped >
.el-autocomplete {
  width: 70%;
}
.el-autocomplete >>> .el-input__inner {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}

.el-autocomplete >>> .el-input__suffix {
  color: #fff;
}
</style>



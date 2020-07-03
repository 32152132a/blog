<template>
  <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect">
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
        res.message.map(k => {
          this.restaurants.push({ value: k.title, id: k._id })
        })
      })
    }

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



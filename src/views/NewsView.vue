<template>
  <div>
    <div v-for="article in this.$store.state.news" v-bind:key="article.id">title : {{ article.title }}</div>
  </div>
</template>

<script>

// import { fetchNewsList } from '../api/index';

export default {
  // data() {
  //   return {
  //     news: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // let vm = this;
    // fetchNewsList()
    // .then(response => vm.news = response.data)
    // .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
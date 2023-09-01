<template>
  <div>
    <div v-for="article in news" v-bind:key="article">title : {{ article.title }}</div>
  </div>
</template>

<script>

import { fetchNewsList } from '../api/index';

export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    let vm = this;
    fetchNewsList()
    .then(response => vm.news = response.data)
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
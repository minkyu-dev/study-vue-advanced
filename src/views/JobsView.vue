<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job">title : {{ job.title }}</div>
  </div>
</template>

<script>
import { fetchAskJobsList } from '../api/index';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    let vm = this;
    fetchAskJobsList()
    .then(response => vm.jobs = response.data)
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
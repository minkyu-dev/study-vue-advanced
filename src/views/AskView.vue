<template>
  <div>
    <div v-for="talk in ask" v-bind:key="talk">{{ talk.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    let vm = this;
    fetchAskList()
    .then(response => vm.ask = response.data)
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
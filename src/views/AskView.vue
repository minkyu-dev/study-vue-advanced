<template>
  <div>
    <div v-for="talk in this.$store.state.ask" v-bind:key="talk.id">{{ talk.title }}</div>
  </div>
</template>

<script>

// import { fetchAskList } from '../api/index'

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  created() {
    this.$store.dispatch("FETCH_ASK");
    // let vm = this;
    // fetchAskList()
    // .then(response => vm.ask = response.data)
    // .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
<template>
  <div>
    <div v-for="talk in this.fetchedAsk" v-bind:key="talk.id">{{ talk.title }}</div>
  </div>
</template>

<script>

// import { fetchAskList } from '../api/index'
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    ...mapGetters([ 'fetchedAsk' ])

    //  # 2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // # 1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
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
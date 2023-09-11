<template>
    <div>
        <p v-for="talk in this.fetchedAsk" v-bind:key="talk.id">
            <a v-bind:href="talk.url">{{ talk.title }}</a>
            <small>{{ talk.url }} by {{ talk.user }}</small>
        </p>
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
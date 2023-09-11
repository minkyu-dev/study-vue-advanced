<template>
    <div>
        <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
            <a v-bind:href="job.url">title : {{ job.title }}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>

// import { fetchAskJobsList } from '../api/index';

export default {
    // data() {
    //   return {
    //     jobs: []
    //   }
    // },
    created() {
        this.$store.dispatch('FETCH_JOBS');
        // let vm = this;
        // fetchAskJobsList()
        // .then(response => vm.jobs = response.data)
        // .catch(error => console.log(error));
    }
}
</script>

<style>

</style>
<template>
    <div>
        <p v-for="article in this.$store.state.news" v-bind:key="article.id">
            <a v-bind:href="article.url">title : {{ article.title }}</a>
            <small>
                {{ article.time_ago }} by
                <!-- <router-link v-bind:to="'/user/' + item.user">{{ article.user }}</router-link> -->
                <router-link v-bind:to="`/user/${article.user}`">{{ article.user }}</router-link>
            </small>
        </p>
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
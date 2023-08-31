<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/item">Item</router-link>
  </div>
</template>

<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: float;
        padding: 8px;
    }
    .header a {
        color: white;
    }
    .header .router-link-exact-active {
        color: #35495e;
    }
</style>
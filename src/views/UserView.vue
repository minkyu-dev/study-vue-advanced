<template>
  <div>
    <p>id : {{ this.user.id }}</p>
    <p>karma : {{ this.user.karma }}</p>
    <p>created : {{ this.user.created }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style></style>

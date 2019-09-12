<template>
  <div class="blogz container-fluid">
    <div class="row">
      <h1>Blogz</h1>
    </div>
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "blogz",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogz");
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
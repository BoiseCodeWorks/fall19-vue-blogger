<template>
  <div class="blog-view"></div>
</template>


<script>
export default {
  name: "blog-view",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.blogId);
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style lang="scss" scoped>
</style>
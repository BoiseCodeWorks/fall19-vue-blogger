<template>
  <div class="blogz container-fluid">
    <div class="row">
      <h1>Blogz</h1>
    </div>
    <div class="row">
      <Blog v-for="blog in blogz" :key="blog._id" :blogProp="blog" />
    </div>
  </div>
</template>


<script>
import Blog from "../components/Blog.vue";
export default {
  name: "blogz",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogz");
  },
  computed: {
    blogz() {
      return this.$store.state.blogz;
    }
  },
  methods: {},
  components: {
    Blog
  }
};
</script>


<style scoped>
</style>
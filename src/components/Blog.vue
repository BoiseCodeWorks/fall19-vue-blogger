<template>
  <div class="blog" @click="viewBlog()">
    <h1>{{blogProp.title}} - {{blogProp.author}}</h1>

    <p>{{blogProp.summary}}</p>
  </div>
</template>


<script>
export default {
  name: "blog",
  props: ["blogProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewBlog() {
      this.$router.push({
        name: "blog",
        params: { blogId: this.blogProp._id }
      });
    }
  },
  components: {}
};
</script>


<style lang="scss" scoped>
</style>
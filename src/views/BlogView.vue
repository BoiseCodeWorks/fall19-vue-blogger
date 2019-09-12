<template>
  <div class="blog-view container-fluid">
    <div class="row">
      <div class="offset-3 bg-secondary border rounded shadow col-6 text-light">
        <h1>{{blog.title}}</h1>
        <h3>by {{blog.author.name}}</h3>
        <img class="img-fluid" :src="blog.img" />
        <p>{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

// "summary": "__a__test__summary",
// "img": "https://bcw.blob.core.windows.net/public/images/7611997462992308",
// "body": "__TEST__BLOG__WITH__COMMENTS__",
// "_id": "5d71c842a4131b24e0105a85",
// "title": "__test__blog",
// "author": "5d71c004ecd2b90ed8cd33ce",
// "createdAt": "2019-09-06T02:45:22.831Z",
// "updatedAt": "2019-09-06T02:45:22.831Z",
// "__v": 0

<script>
export default {
  name: "blog-view",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.blogId);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <div class="blog" @click="viewBlog()">
    <h1>{{blogProp.title}} - {{blogProp.author}}</h1>

    <p>{{blogProp.summary}}</p>
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
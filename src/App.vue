<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row p-3 bg-light shadow mb-2 justify-content-center text-right">
        <div class="col-12">
          <p class="m-0">Welcome {{user.name}}</p>
        </div>
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: absolute;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <vs-button @click="activeSidebar = !activeSidebar" flat icon>
      <span class="material-icons">menu</span>
    </vs-button>
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <h1>Aplikasi P2</h1>
      <br /><br /><br />
      <vs-sidebar-item>
        <label for="NIK">NIK</label>
        <vs-input type="text" placeholder="Enter NIK" />
      </vs-sidebar-item>

      <vs-sidebar-item>
        <label for="Password">Password</label>
        <vs-input type="password" placeholder="Password" />
      </vs-sidebar-item>
      <a style="text-decoration: none" href=""> forgot password </a>
      <br /><br /><br /><br /><br /><br />
      <vs-sidebar-item>
        <router-link class="sidebar-link" to="/Dashboard">LOGIN</router-link>
      </vs-sidebar-item>
      <br />
      <a style="text-decoration: none" href="">
        Don't have an account? Sign up here
      </a>
      <template #footer> </template>
    </vs-sidebar>
    <h1>{{ msg }}</h1>

    <h3>Aplikasi Smart RT<br />Perkawinan dan Perceraian</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    active: "0",
    activeSidebar: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

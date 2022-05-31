<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <Home /> -->
  <router-link to="/">Home</router-link> <br />
  <router-link to="/login">Login</router-link> <br />
  <router-link to="/profile">Profile</router-link> <br />
 
 <router-view></router-view>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  // components: {
  //   Home
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

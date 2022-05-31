<template>
 
  <router-link to="/">Home Page</router-link> <br />
  <router-link to="/login">Login Page</router-link> <br />
  <router-link to="/profile/vijay">Vijay Profile Page</router-link> <br />
  <router-link to="/profile/prajwal">Prajwal Profile Page</router-link> <br />
  <router-link to="/profile/gokul">Gokul Profile Page</router-link> <br />
  
  <!-- we can use Id also -->
  <!-- <router-link to="/profile/3">Gokul Profile Page</router-link> <br /> -->
 
 <router-view></router-view>
</template>

<script>

export default {
  name: 'App',

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

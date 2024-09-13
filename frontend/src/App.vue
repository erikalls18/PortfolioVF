<template>
  <div id= "app">
    <div>
      <NavigationBar/>
      <router-view/>
    </div>
    <!-- Aquí se agrega el contenedor de la curva -->
   
    <div class="curva"></div>
 
  </div>
  </template>

<script>

import NavigationBar from './components/NavigationBar.vue';

export default {
  name: 'App',
  components:{
      NavigationBar
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  
}

body{
  background-color: rgb(0, 0, 20);
  background: linear-gradient( top, rgba(1, 1, 32, 1), rgba(1, 1, 32, 0.5));
  scroll-behavior: smooth;
}

</style>
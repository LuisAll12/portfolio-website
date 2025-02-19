<script setup>
  import NavBar from './components/Navbar.vue';
</script>

<template>
      <NavBar />
    <router-view />
</template>

<style scoped>
  @import './assets/css/global.css';
  html, body{
    margin: 0;
    padding: 0;
  }
</style>

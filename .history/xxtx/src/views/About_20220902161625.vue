<template>
  <Header />
  <router-view/>
      <p>这是个猪</p>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import Header from '@/components/Header.vue'
  
  export default {
    name: 'Home',
    components: {
      Header
    }
  }
  </script>
  <style>
  
  </style>
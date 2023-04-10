<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
        <div id="name">Zilpa Michel</div>
        <div><RouterLink to="/"><div class="menu"></div></RouterLink></div>
  </div>
  <RouterView />
</template>

<style scoped>
  .nav{
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content:space-between;
      width: 100%;
      height: 10%;
      font-family: 'Playfair Display',sans-serif;
  }
  #name{
    margin-left: 10px;
  }
.menu{
    width: 50px;
    height: 50px;
    background: red;
    margin-right: 10px;
  }
</style>

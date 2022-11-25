<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<header>

  <RouterLink to="/" >Home</RouterLink>
  <RouterLink to="/about" style="margin-left:100px">About</RouterLink>
  <RouterLink to="/api" style="margin-left:100px">API</RouterLink>
  <RouterLink to="/register" style="margin-left:400px">Register</RouterLink>
</header>

<nav>

  London<br>
  Paris<br>
  Tokyo<br>

</nav>
<section>

  <RouterView />
</section>
<footer>
  this is a demo  
</footer>

</template>

<style>

header {
    background-color: #eeeeee;
    text-align:left;
    padding:10px;
    line-height: 2;
}
nav {
    line-height:40px;
    background-color:#eeeeee;
    height: 400px;
    width:180px;
    float:left;
    padding:5px;	      
}
section {
    float:center;
    padding:10px;	 	 
}
footer {
    border: 0cm;
    background-color: #eeeeee;
    text-align:center;
    padding:10px;
    line-height: 2;
}
</style>

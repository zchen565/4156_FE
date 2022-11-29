<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<header>

  <RouterLink to="/" >Home</RouterLink>
  <RouterLink to="/about" style="margin-left:100px">About</RouterLink>
  <!-- <RouterLink to="/api" style="margin-left:100px">API</RouterLink> -->
  <RouterLink to="/register" style="margin-left:100px">Register</RouterLink>
  <RouterLink to="/login" style="margin-left:100px">Login</RouterLink>
  <RouterLink to="/comment" style="margin-left:100px">Rate/Comment</RouterLink>
  <RouterLink to="/search" style="margin-left:100px">Search</RouterLink>
  <RouterLink to="/writeblog" style="margin-left:100px">WriteBlog</RouterLink>
  <RouterLink to="/score/0" style="margin-left:100px">ScoreSample</RouterLink>
  <RouterLink to="/page/0" style="margin-left:100px">PageSample</RouterLink>
</header>

<!-- <nav>
  ?? University<br>
  2022 Fall<br>

</nav> -->
<section>
  <RouterView />
</section>

<!-- <footer>
  this is a demo  
</footer> -->

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

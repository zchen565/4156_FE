<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
export default{
  // for test
  // created(){
  //   localStorage.setItem('username','') 
  //   localStorage.setItem('token','')
  // },
  data() {
        return {
            username: localStorage.getItem('username'), // will this renew?
            token: localStorage.getItem('token'),
            status: ""
        }
    },
  methods: {
    get_visitor(){
      if(localStorage.getItem('username') == null || localStorage.getItem('username') == ""
        || localStorage.getItem('username') == "nosuchuser"){
        this.status =  "Visitor"
      } else {
        this.status =  "Enrolled User"
      }
      return this.status
    },
    get_username(){
      this.username = localStorage.getItem('username')
      return this.username
      // return localStorage.getItem('username')
    },
    get_token(){
      this.token = localStorage.getItem('token')
      return this.token
      // return localStorage.getItem('token')
    },
    reloadInfo(){
      this.username = this.get_username()
      this.token = this.get_token()
      this.status = this.get_visitor()
    }
    
  }
  
}
</script>

<template>
<header>

  <RouterLink to="/" >Home</RouterLink>
  <RouterLink to="/login" style="margin-left:100px">Login</RouterLink>
  <RouterLink to="/apply" style="margin-left:100px">Apply</RouterLink>
  <RouterLink to="/get_by_sender" style="margin-left:100px">GetSender</RouterLink>
</header>

<nav>
  Columbia University<br>
  2022 Fall<br>
  UserName :<br>
  {{this.username}} <br>
  Token : <br>
  {{this.token}} <br>
  User Type :<br>
  {{this.status}}<br>
  <button @click="reloadInfo">Refresh Side</button>

</nav>
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

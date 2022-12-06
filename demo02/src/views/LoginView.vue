<script>
import axios from "axios"
export default {

    data (){
        return {
            _message : "User Login",
            text: "empty_text",
            username: "oooooo",
            password: "",
            token: "xxxx",
            logout: ""
        }
    },
    methods: {
        async loginSubmit() {
            //逻辑判定
            axios.post('http://20.127.204.67:30005/login', { //请统一http地址
                'username': this.username, //uni
                'password': this.password
            })
            .then(response => {
            // JSON responses are automatically parsed.
            // this.posts = response.data.total
            if(response.data.access_token == "" || response.data.access_token == null){
                alert("Input Valid Username/Password")
            } else {
                    this.text = response.data
                    localStorage.setItem('token', response.data.access_token) // this is a client? or a server??
                    localStorage.setItem('username', this.username)
                    // shouldn't that be sb's token?
                    this.username = localStorage.getItem("username")
                    this.token = localStorage.getItem("token")
                    alert("Success!")
                }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
            
        },
        logout(){
            axios.post('http://20.127.204.67:30005/logout', { //请统一http地址
                'username': localStorage.getItem("username"), //uni
                'access_token': localStorage.getItem("token")
            })
            .then(response => {

            })
            .catch(e => {
            this.errors.push(e)//console
            })
            localStorage.setItem('username', "")
            localStorage.setItem('token', "") // this is a client? or a server??
            this.username = localStorage.getItem("username")
            this.token = localStorage.getItem("token")
        },
        printshit(){
            alert(localStorage.getItem('username'))
            alert(localStorage.getItem('token'))
        }
    }
}
</script>


<template>
    <h1>{{_message}} </h1>

    <p>
        Username
    </p>
        <input v-model="username">
    <p>
        Password
    </p>
        <input v-model="password">

    <button @click="loginSubmit"> Login</button>
    <br>
    <br>
    <button @click="logout"> Logout </button>

    <p>
    Info Verify:
    </p>

    <p>{{this.username}}</p>
    <p>{{this.token}}</p>
    <body>{{text}}</body>

    <button @click="printshit"> Print2test </button>
    <P>
        
    </P>
    


</template>
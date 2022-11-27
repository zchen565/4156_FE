<script>
import axios from "axios"
export default {

    data (){
        return {
            _message : "User Registration",

            username: "",
            password: "",
        }
    },
    methods: {
        async loginSubmit() {
            //逻辑判定
            const response = axios.post('login', { //请统一http地址
                'username': this.username, //uni
                'password': this.password
            })
            .then(response => {
            // JSON responses are automatically parsed.
            // this.posts = response.data.total
                if(response.data.token == ""){
                    alert("Input Valid Username/Password")
                } else {
                    localStorage.setItem('token', response.data.token) // this is a client? or a server??
                    localStorage.setItem('username', this.username)
                    // shouldn't that be sb's token?
                    alert("Success!")
                }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
            //
            
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
    <body>{{text}}</body>

</template>
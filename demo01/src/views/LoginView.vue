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


        async handleSubmit() {
            //逻辑判定
            const response = axios.post('login', {
                'username': this.username,
                'password': this.password
            })

            localStorage.setItem('token', response.data.token)

        }
    }
}
</script>


<template>
    <h1>{{_message}} </h1>

    <p>
        Username
    </p>
        <input v-model="text">
    <p>
        Password
    </p>
        <input v-model="password">
    <p>
        Reinput Password
    </p>
        <input v-model="password1">
    <body>{{text}}</body>
    <button @click="finalCheck"> Register</button>

</template>
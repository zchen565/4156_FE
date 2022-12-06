<script>
import axios from "axios"

export default {

    data (){
        return {
            _message : "User Registration",
            text: "xxxxxxxxx",
            username: "",
            password: "",
            password1: ""
        }
    },
    methods: {
        reverseMessage() {
            this._message = this._message
            .split('')
            .reverse()
            .join('')
        },
        notify() {
            alert('navigation was prevented.')
        }
        //用户名和密码判断

        //submit的东西
        //reactive报错
        ,
        finalCheck() {
            //逻辑判定
            //跳转或者响应
            if (this.password == this.password1){
                axios.post("http://20.127.204.67:30005/Register",{'username':this.username, 'password':this.password})
                .then(response => {
            // JSON responses are automatically parsed.
            // this.posts = response.data.total
                this.text = response.data
                // if(response.data.access_token == "" || response.data.access_token == null){
                //     alert("Input Valid Username/Password")
                // } else {
                //     // localStorage.setItem('token', response.data.access_token) // this is a client? or a server??
                //     localStorage.setItem('username', this.username)
                //     alert("Success!")
                // }
                // localStorage.setItem('username', this.username)

            })
            .catch(e => {
            this.errors.push(e)//console
            })
                // this.$router.push('/login')
            }
            else {
                alert('passwords should be same')
            }

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
    <p>
        Reinput Password
    </p>
        <input v-model="password1">
    <body>{{text}}</body>
    <button @click="finalCheck"> Register</button>

</template>
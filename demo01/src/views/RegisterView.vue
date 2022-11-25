<script>
import axios from "axios"

export default {

    data (){
        return {
            _message : "User Registration",
            text: "",
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
                axios.post('/register',{'username':this.username, 'password':this.password})
                //跳转
                this.$router.push('/login')
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
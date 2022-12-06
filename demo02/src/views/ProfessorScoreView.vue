<script>
import axios from "axios"

export default{
    
    data() {
        return {
            uni: "",
            name: "",
            email: "",
            teaching: "",
            basicinfo: "",
            comments: [], // a list of (score, comment) // show this in the html
            score: 5,
            text: ""
        }
    },
    created() {

        // 监听路由变化
        // this.$watch(
        // () => this.$route.params,
        // (toParams, previousParams) => {
        //     // 对路由变化做出响应...
        //    //我也不知道这里要干啥
        // }
        // )

        this.comments = [{
        "score": 28,
        "comment": "Sweden"
        }, {
        "score": 56,
        "comment": "USA"
        }, {
        "score": 89,
        "comment": "England"
        }];

        
    },
    methods: {

        getComments() {
            
            axios.get(`http://20.127.204.67:8083/get_faculty_rating?uni=${this.uni}`)
            // axios.get('http://20.127.204.67:8083/get_faculty_rating?uni=x777')
            .then(response => {
                // JSON responses are automatically parsed.
                this.text = response.data
                this.getComments()
                // alert("I entered")
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },
        getBasic(){
            axios.get(`http://20.127.204.67:8083/get_faculty_info?uni=${this.uni}`)
            .then(response => {
            // JSON responses are automatically parsed.
                this.basicinfo = response.data
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        }
    }
    
}

</script>

<template>

    <input v-model="uni">
    <button @click="getComments"> Professor Score</button>
    <button @click="getBasic"> Professor Info  </button>
    <h1>Professor UNI : {{uni}}</h1>
    <!-- <h2>UNI: {{ $route.params.id }}</h2> -->
    <p>{{basicinfo}}</p>
    <!-- <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{teaching}}</p> -->
    <!-- score is from get_faculty_rating -->
    <!-- <h2>{{score}}</h2> -->

    <h3>Comments</h3>
    <p>{{this.text}}</p>


    <!-- <ul id="obj">
        <li v-for="obj in comments">
            Score: {{obj.score}} <br>
            {{obj.comment}}
        </li>
    </ul> -->
    
</template>
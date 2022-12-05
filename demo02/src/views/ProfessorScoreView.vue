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
        getPage(){
            if(uni.trim() == ""){
                alert("please enter a valid uni")
                return
            }
            this.getComments()
            this.getBasic()
        },
        async getComments() {
            
            // 评论信息 》》》》》》》》
            axios.post('http://20.127.204.67:8083/get_faculty_rating', {
                    "uni":this.uni,
                })
            .then(response => {
            // JSON responses are automatically parsed.
                // _status = response.data.status // error code
                // -1 unknown error
                // 0 no such professor
                // 1 success
                
                // switch (_status) {
                //     case -1:{
                //         alert("unknown error happend")
                //         break
                //     }
                //     case 0: {
                //         alert('no such professor')
                //         break
                //     }
                //     case 1: {
                //         prompt('Success!')
                //         //show the motherfuckers !
                //         this.comments = response.data.comments //是否要重新解析？？
                //         //解析成对应的形式 
                //         break
                //     }
                // }
                this.comments = response.data.comments
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },
        async getBasic(){
            axios.get('http://20.127.204.67:8083/get_faculty_info', {
                    "uni":this.uni,
                })
            .then(response => {
            // JSON responses are automatically parsed.
                _status = response.data.status // error code
                // -1 unknown error
                // 0 no such professor
                // 1 success
                switch (_status) {
                    case -1:{
                        alert("unknown error happend")
                        break
                    }
                    case 0: {
                        alert('no such professor')
                        break
                    }
                    case 1: {
                        prompt('Success!')
                        //show the motherfuckers !
                        this.email = response.data.email 
                        this.teaching = response.data.course
                        this.score = response.data.score
                        break
                    }
                }
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
    <button @click="getPage"> Professor Score</button>
    <h1>Professor UNI : {{uni}}</h1>
    <!-- <h2>UNI: {{ $route.params.id }}</h2> -->
    <p>{{basicinfo}}</p>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{teaching}}</p>
    <!-- score is from get_faculty_rating -->
    <h2>{{score}}</h2>

    <h3>Comments</h3>
    <p>{{this.text}}</p>
    <ul id="obj">
        <li v-for="obj in comments">
            Score: {{obj.score}} <br>
            {{obj.comment}}
        </li>
    </ul>
    
</template>
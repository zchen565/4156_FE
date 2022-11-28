<script>
import axios from "axios"

export default{
    
    data() {
        return {
            name: "",
            email: "",
            teaching: "",
            comments: [], // a list of (score, comment) // show this in the html
            score: 5
        }
    },
    created() {

        // 监听路由变化
        this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            // 对路由变化做出响应...
           //我也不知道这里要干啥
        }
        )

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
        async getComments() {
            
            // 评论信息 》》》》》》》》
            axios.get('/score/'+ this.$router.params.id)
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
                        this.comments = response.data.comments //是否要重新解析？？
                        //解析成对应的形式 
                        break
                    }
                }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },
        async getBasic(){
            axios.get('/professor/'+ this.$router.params.id)
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
    <!--如何进行用户判定-->
    <!--professor/course, 1-5, comment, time-->
    <!--是否需要留存用户记录-->
    <h1>Professor Score Page</h1>
    <h2>UNI: {{ $route.params.id }}</h2>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{teaching}}</p>
    <h2>{{score}}</h2>
    <h3>Comments</h3>
    <ul id="obj">
        <li v-for="obj in comments">
            Score: {{obj.score}} <br>
            {{obj.comment}}
        </li>
    </ul>
    

</template>
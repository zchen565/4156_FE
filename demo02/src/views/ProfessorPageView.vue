<script>
import axios from "axios"

export default{
    
    data() {
        return {
            uni: "",

            name: "",
            email: "",
            teaching: "",
            events: [], // a list of (score, comment) // show this in the html
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

        this.events = [{
        "name": "need an RA",
        "content": "RA for my machine learning project"
        }, {
        "name": "TA for 4156",
        "content": "4156 still needs another 4 TAs. "
        }, {
        "name": "RA for Software Engineering Synthesis",
        "content": "I need two RA for my Software Engineering Synthesis this spring "
        }];
        
    },
    methods: {
        
        async getEvents() {
            
            axios.get('/events/'+ this.$router.params.id)
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
                        this.events = response.data.events //是否要重新解析？？
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
            axios.get('/professor/'+ this.$router.params.id) // we can use post to get the info!
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
    <!--是否需要留存用户记录-->
    <input v-model="uni">
    <button @click="this.getPage"> Professor Page</button>

    <h1>Professor Events Page</h1>
    <h2>UNI: {{ $route.params.id }}</h2>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{teaching}}</p>
    
    <h3>Events</h3>
    <ul id="obj">
        <li v-for="obj in events">
            {{obj.name}} <br>
            {{obj.content}}
        </li>
    </ul>
    

</template>
<script>
// use composition api later
import axios from 'axios'
export default{
    data () {
        return {
            info : "init",
            hello : "?????????????????????",
            posts: 'orig', //str ? json
            b1_cont: "bbb",
            b2_cont: "b2"
        }
    },
    created() {
        axios.get('https://api.npms.io/v2/search?q=vue')
        .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data.total
        })
        .catch(e => {
        this.errors.push(e)//console
        });
        
        axios.get('http://127.0.0.1:5000/')
        .then(response => {
        // JSON responses are automatically parsed.
        this.hello = response.data
        })
        .catch(e => {
        this.errors.push(e)//console
        })
    },

    methods: {
        get_1() {
            //axios
            axios.get('http://127.0.0.1:5000/api') // must use http://
            .then(response => {
                this.b1_cont = response.data.message
            })
            .catch(e => { //去哪里了？？？？
                this.errors.push(e)
            })
        },

        async get_2() {
            await axios.get('http://127.0.0.1:5000/simple/api_2')
            .then(response => {
                this.b2_cont = response.data
            })
            .catch(e => { //去哪里了？？？？
                this.errors.push(e)
            })
        }

    }


}
</script>


<template>
    
    <h1>{{info}}</h1>
    <h1>{{hello}}</h1>
    <h2>{{posts}}</h2>
    <div>
        <button @click="get_1">B1</button>
        <button @click="get_2">B2</button>
    </div>
    <div>

        <h3>{{b1_cont}}</h3>
        <h3>{{b2_cont}}</h3>

    </div>

</template>
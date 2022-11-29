<script>
import axios from "axios"

export default{
    data() {
        return {
            text: "xxxxxxxxxxxxxx",
            uni: "",
            score: "",
            comment: ""
        }
    },
    methods: {
        postComment() {
            if(this.uni.trim() == ""){
                alert("Please input a valid professor name")
                return
            }

            if(this.score == "0" || this.score == "1" || this.score == "2" 
                || this.score == "3" || this.score == "4" || this.score == "5" ){
                // continue
            } else{
                alert("Please input a score in {0,1,2,3,4,5}")
                return
            }
            if(this.comment.trim().length < 10){
                alert("Please input a comment longer than 15 characters")
                return
            }

            // 'username':localStorage.getItem('username'), 
            // 'token': localStorage.getItem('token'), 
            axios.post('http://20.127.204.67:8083/create_faculty_rating', {
                    "uni":this.uni,
                    "score": this.score,
                    "comment" : this.comment
                })
            .then(response => {
            // JSON responses are automatically parsed.
                // _status = response.data.status // error code
                // // -1 unknown error
                // // 0 no such professor
                // // 1 success
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
                //          // choose your professor
                //         break
                //     }
                // }
                this.text = response.data
                alert("Success")
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
    <h1>Rate My Professor</h1>
    <p>
        uni <!--this should be a down list-->
    </p>
        <input v-model="uni">
    <p>
        Score 1-5 <!--this should be a down list-->
    </p>
        <input v-model="score">
    <p>
        Your comment <!--this should be a down list-->
    </p>
        <input v-model="comment">
    
    <button @click="postComment"> post comment</button>
    <br>
    {{text}}
    

</template>
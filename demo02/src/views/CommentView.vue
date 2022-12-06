<script>
import axios from "axios"

export default{
    data() {
        return {
            text: "xxxxxxxxxxxxxx",
            uni: "",
            score: "",
            comment: "",
            isstudent: ""
        }
    },
    methods: {
        isStudent() { // this should be universal for api that needs authentication
            alert("User: " + localStorage.getItem('username'))
            alert("Token: " + localStorage.getItem('token'))
            axios.post('http://20.127.204.67:30005/is_logged_in',{ // need to change here
                'username':localStorage.getItem('username'), 
                "access_token": localStorage.getItem('token'), 
            }) //validate user's status
            .then(response => {
                this.isStudent = response.data
            if(response.data.status != "success"){
                alert("Only login user can post comment")
                return false
            }
            return true
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },
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
            flag = this.isStudent()
            if(!flag){
                alert("You are not a student enrolled!")
                return
            }

            axios.post('http://20.127.204.67:8083/create_faculty_rating', {
                    "uni":this.uni,
                    "score": this.score,
                    "comment" : this.comment
                })
            .then(response => {

                this.text = response.data
                if(text != "" || text != null)
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
    {{isstudent}}
    <br>
    {{text}}
    

</template>
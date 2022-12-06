<script>
import axios from "axios"

export default{
    created() {
        this.isStudent()
        // if(this.loggedin){
        //     alert("Please Loggin")
        //     this.$router.push('/login')
        // }
        
    },
    data() {
        return {
            text: "xxxxxxxxxxxxxx",
            uni: "",
            score: "",
            comment: "",
            isstudent: "",
            loggedin: false
        }
    },
    methods: {
        isStudent() { // this should be universal for api that needs authentication

            axios.post('http://20.127.204.67:30005/is_logged_in',{ // need to change here
                'username':localStorage.getItem('username'), 
                "access_token": localStorage.getItem('token'), 
            }) //validate user's status
            .then(response => {
                this.isStudent = response.data
            if(response.data.status == "success"){
                alert("You are logged in")
                this.loggedin = true
            }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
            
        },
        postComment() {
            if(!this.loggedin){
                alert("you should log in !")
                this.$router.push('/login')
                return
            }
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

            // flag = this.isStudent()
            // if(!flag){
            //     alert("You are not a student enrolled!")
            //     return
            // }
            // if(this.loggedin != "true"){
            //     alert("You are not logged in")
            //     return 
            // }
            alert('user: '+localStorage.getItem('username'))

            // axios.post('http://20.127.204.67:30005/is_logged_in',{ // need to change here
            //     'username':localStorage.getItem('username'), 
            //     "access_token": localStorage.getItem('token'), 
            // }) //validate user's status
            // .then(response => {
            //     this.isStudent = response.data
            //     if(response.data.status != "success"){
            //         alert("Only logined user can post comment")
            //         this.loggedin = false
            //         return
            //     } else{
            //         this.loggedin = true
            //     }

            // alert("logged in !")
            // })
            // .catch(e => {
            // this.errors.push(e)//console
            // })

            // alert("entered_shit")

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
    {{this.loggedin}}
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
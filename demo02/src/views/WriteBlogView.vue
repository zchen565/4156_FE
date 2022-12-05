<script>
import axios from "axios"

export default{
    data() {
        return {
            name: "",
            content: ""
        }
    },
    methods: {
        isFaculty(){
            alert("User", localStorage.getItem('username')," : ",localStorage.getItem('token'))
            axios.post("0.0.0.0",{ // need to change here
                'username':localStorage.getItem('username'), 
                'token': localStorage.getItem('token'), 
            }) //validate user's status
            .then(response => {

            _status = response.data.status //
                if(_status == false){
                    alert("Only login user can post comment")
                    return false
                }
                return true
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },
        postEvent() {
            if(this.name.trim() == ""){
                alert("Please input a valid event name")
                return
            }

            if(this.content.trim().length < 10){
                alert("Please input a content longer than 15 characters")
                return
            }
            flag = this.isFaculty()
            if(!flag){
                alert("Only login user can do this and make sure u r a professor")
                return
            }
            // only see the content need the param router
            axios.post('/writeblog', {'username':localStorage.getItem('username'), 
                                        'name': this.name,
                                        'content': this.content})
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
                        alert('no such professor or you are not a professor !')
                        break
                    }
                    case 1: {
                        prompt('Success!')
                         // choose your professor
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
    <h1>Post an Event</h1>
    <p>
        Event Name <!--this should be a down list-->
    </p>
        <input v-model="name">
    <p>
        Content <!--this should be a down list-->
    </p>
        <input v-model="content">
    
    <button @click="postEvent"> post event</button>
    

</template>
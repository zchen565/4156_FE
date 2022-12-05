<script>
import axios from "axios"

export default{
    data() {
        return {
            name: "",
            course: "" // cid or sth
        }
    },
    methods: {
        professorScore() {
            axios.post('/score', {professor:this.name})
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
                        uni = response.data.uni
                        this.$router.push({ name: 'professorscore', params: { id: uni } }) // choose your professor
                        break
                    }
                }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
            
        },

        professorPage() {
            axios.post('/professor', {professor:this.name})
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
                        uni = response.data.uni
                        // this.$router.push('/blog/'+uni) // choose your professor
                        break
                    }
                }
            })
            .catch(e => {
            this.errors.push(e)//console
            })
        },

        courseScore() {
            axios.post('/course', {course:this.course})
            .then(response => {
            // JSON responses are automatically parsed.
                _status = response.data.status // error code
                switch (_status) {
                    case -1:{
                        alert("unknown error happend")
                        break
                    }
                    case 0: {
                        alert('no such course')
                        break
                    }
                    case 1: {
                        prompt('Success!')
                        course = response.data.course
                        // this.$router.push('/score/'+course) // choose your professor
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
    <h1>Search Index Page</h1>
    <h2>redirect you to the score page / blog page</h2>
    <p>
        Professor Name <!--this should be a down list-->
    </p>
        <input v-model="name">

    <button @click="professorScore"> Professor Score</button>
    <button @click="professorPage"> Professor Page</button>
    <p>
        Course ID
    </p>
        <input v-model="course">
    <button @click="courseScore"> Course Score</button>

    

</template>
<script>
import axios from "axios"

export default{
    
    data() {
        return {
            body: "",
        }
    },
    methods: {
        async Bid() {
            
            axios.post('http://localhost:8080/bid', {
                'uni': this.uni,
                'course': this.course,
                'quote': parseInt(this.quote),
                'username': localStorage.getItem("username"),
                'access_token': localStorage.getItem("token")
            })
            .then(response => {
                console.log(response.data)
                this.body = response.data
            })
            .catch(e => {
            console.log(e)
            this.errors.push(e)
            })
        }
    }
    
}

</script>

<template>

    <p>
        Uni
    </p>
        <input v-model="uni">
    <p>
        Course
    </p>
        <input v-model="course">
    <p>
        Quote
    </p>
        <input v-model="quote">
    
    <button @click="Bid"> Bid</button>

    <p>{{body}}</p>
    
</template>
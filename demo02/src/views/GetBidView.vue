<script>
import axios from "axios"

export default{
    
    data() {
        return {
            body: "",
        }
    },
    methods: {
        async GetBid() {
            
            axios.get(`http://localhost:8080/get_bid?course=${this.course}&capacity=${this.capacity}`)
            .then(response => {
                console.log(response.data)
                this.body = response.data
            })
            .catch(e => {
            console.log(e)
            this.errors.push(e)//console
            })
        }
    }
    
}

</script>

<template>

    <p>
        Course
    </p>
        <input v-model="course">
    <p>
        Capacity
    </p>
        <input v-model="capacity">
    
    <button @click="GetBid"> Get Bid</button>

    <p>{{body}}</p>
    
</template>
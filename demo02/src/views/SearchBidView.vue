<script>
import axios from "axios"

export default{
    
    data() {
        return {
            body: "",
        }
    },
    methods: {
        async SearchBid() {
            
            axios.get(`http://localhost:8080/search_bid?uni=${this.uni}`)
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
        Uni
    </p>
        <input v-model="uni">
    
    <button @click="SearchBid"> Search Bid</button>

    <p>{{body}}</p>
    
</template>
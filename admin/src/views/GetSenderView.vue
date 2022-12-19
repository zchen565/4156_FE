<script>
import axios from "axios"

export default{
    
    data() {
        return {
            body: "",
        }
    },
    methods: {
        GetSender() {
            
            axios.get(`http://20.84.85.127:5051/api/get_by_sender?sender=${this.get_sender}`)
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
        Sender
    </p>
        <input v-model="get_sender">
    
    <button @click="GetSender"> Get Sender</button>

    <p>{{body}}</p>
    
</template>
<script>
import axios from "axios"

export default{
    
    data() {
        return {
            body: "",
        }
    },
    methods: {
        Apply() {
            
            axios.post('http://20.84.85.127:5051/apply', {
                'sender': this.sender,
                'receiver': this.receiver,
                'content': this.content
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
        Sender
    </p>
        <input v-model="sender">
    <p>
        Receiver
    </p>
        <input v-model="receiver">
    <p>
        Content
    </p>
        <input v-model="content">
    
    <button @click="Apply"> Apply</button>

    <p>{{body}}</p>
    
</template>
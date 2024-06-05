<template>
    <form class="form">
        <input class="input" type="text" placeholder="Escribe tu pregunta" v-model="messageContent">
        <button class="btn--send-message" @click.prevent="sendMessage">Send</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                messageContent: "",
                author: "user",
            }
        },
        methods: {
            sendMessage()  {
                const message = { content: this.messageContent, author: this.author}
                this.$emit('send-message', message);
            }
        }
    }
</script>
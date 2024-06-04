<template>
    <ul>
        <li :class="['message', {'message-user': message.author === 'user', 'message-chatbot': message.author === 'chatbot' }]" v-for="message in messages" :key="message">
            {{ message.content }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            messagesLog: {
                type: Array,
            },
        },
        data() {
            return {
                messages: this.messagesLog,
            }
        }
    }
</script>
<style>
</style>
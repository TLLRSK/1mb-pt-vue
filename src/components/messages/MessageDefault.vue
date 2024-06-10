<template>
  <li class="message" :class="messageClasses">
    <p>{{ content }}</p>
  </li>
</template>

<script>
export default {
  props: {
    messageAuthor: {
      type: String,
      required: true,
    },
    messageContent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      author: this.messageAuthor,
      content: this.messageContent,
    };
  },
  computed: {
    messageClasses() {
      return [
        {
          "message--user": this.author === "user",
          "message--chatbot": this.author === "chatbot",
        },
      ];
    },
  },
};
</script>

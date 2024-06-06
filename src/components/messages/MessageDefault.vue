<template>
    <li :class="[{'message--user': author === 'user', 'message--chatbot': author === 'chatbot' }]">
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
};
</script>
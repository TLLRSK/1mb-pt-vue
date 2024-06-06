<template>
  <li class="message--image-card message--chatbot">
    <article class="article">
      <img class="article-img" :src="imgUrl" alt="">
      <div class="article-content">
        <h3 class="title">{{title}}</h3>
        <p class="paragraph">{{text}}</p>
      </div>
      <a class="article-link" :href="articleUrl" target="_blank">Seguir leyendo</a>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgUrl: this.content.imgUrl,
      title: this.content.title,
      text: this.content.text,
      articleUrl: this.content.articleUrl,
    };
  },
};
</script>
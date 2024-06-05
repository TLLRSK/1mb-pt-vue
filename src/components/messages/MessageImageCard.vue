<template>
    <li class="message--image-card message--chatbot">
      <article class="article">
            <img class="article-img" :src="article.imgUrl" alt="">
            <div class="article-content">
              <h3 class="title">{{article.title}}</h3>
              <p class="paragraph">{{article.text}}</p>
            </div>
            <a class="article-link" :href="article.articleUrl">Seguir leyendo</a>
        </article>
    </li>
  </template>
  
  <script>
  export default {
    data() {
      return {
        article: {
                imgUrl: "https://placehold.jp/150x150.png",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "",
            },
      };
    },
  };
  </script>
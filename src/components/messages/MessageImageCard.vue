<template>
    <div class="swiper-container message--image-card">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(article, index) in articles" :key="index">
            <img class="img" :src="article.imgUrl" alt="">
            <h3 class="title">{{article.title}}</h3>
            <p class="paragraph">{{article.text}}</p>
            <a class="link" :href="article.articleUrl">Seguir leyendo</a>
        </div>
      </div>
     
      <div class="swiper-pagination"></div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  
  export default {
    data() {
      return {
        articles: [
            {
                imgUrl: "https://placehold.jp/150x150.png",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "",
            },
            {
                imgUrl: "https://placehold.jp/150x150.png",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "",
            },
            {
                imgUrl: "https://placehold.jp/150x150.png",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "",
            },
        ],
        swiper: null
      };
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: '1',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy();
        this.swiper = null;
      }
    },
  };
  </script>
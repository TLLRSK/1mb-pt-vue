<template>
    <div class="swiper questions-carousel">
      <div class="swiper-wrapper">
        <button class="swiper-slide question" v-for="(question, index) in questions" :key="index">
          {{ question }}
        </button>
      </div>
      
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>  
    </div>
    
  </template>
  
  <script>
  import Swiper from 'swiper';
  
  export default {
    data() {
      return {
        questions: [
          "Qué es un chatbot",
          "Para qué sirve",
          "Qué es 1millionbot",
          "Qué es una IA"
        ],
      }
    },
    mounted() {
      this.swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: '16',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  };
  </script>
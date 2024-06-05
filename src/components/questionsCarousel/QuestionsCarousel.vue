<template>
    <div class="swiper-container">
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
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: '24',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  };
  </script>
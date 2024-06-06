<template>
    <div class="swiper chat-questions-carousel">
      <div class="swiper-wrapper">
        <button class="swiper-slide question" v-for="(question, index) in optionsList" :key="index">
          {{ question.text }}
        </button>
      </div>
      
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>  
    </div>
    
  </template>
  
  <script>
  import Swiper from 'swiper';
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['optionsList']),
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
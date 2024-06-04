<template>
    <div>
      <swiper-container
        :slides-per-view="3"
        navigation="true"
      >
        <swiper-slide v-for="(question, index) in questions" :key="index">
          <button>{{ question }}</button>
        </swiper-slide>
      </swiper-container>
    </div>
  </template>
  
  <script>
  import { register } from 'swiper/element/bundle';
  import { ref } from 'vue';
  
  // Registrar los elementos personalizados de Swiper
  register();
  
  export default {
    setup() {
      const questions =[
        "Qué es un chatbot",
        "Para qué sirve",
        "Qué es 1milionbot",
        "Qué es una IA"
      ];
  
      return {
        questions
      };
    }
  };
  </script>
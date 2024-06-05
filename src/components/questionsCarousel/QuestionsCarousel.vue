<template>
    <swiper-container
    :slides-per-view="3"
    navigation="true"
    >
        <swiper-slide v-for="(question, index) in questions" :key="index">
            <button>{{ question }}</button>
        </swiper-slide>
    </swiper-container>
    
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        questions: [
          "Qué es un chatbot",
          "Para qué sirve",
          "Qué es 1milionbot",
          "Qué es una IA"
        ],
      }
    },
  };
  </script>
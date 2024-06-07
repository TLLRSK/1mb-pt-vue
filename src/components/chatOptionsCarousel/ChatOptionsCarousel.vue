<template>
    <swiper-container ref="ChatOptionsContainer" class="chat-questions-carousel"
    >
      <swiper-slide class="option" v-for="(option, index) in chatOptionsList" :key="index">
        <button-chat-option :option="option"></button-chat-option>
      </swiper-slide>
    </swiper-container>
</template>

<script>
  import { mapState } from 'vuex';
  import {ButtonChatOption} from '../../data';
  export default {
    components: {
      ButtonChatOption,
    },
    computed: {
      ...mapState(['chatOptionsList']),
    },
    mounted() {
    // Overriding swiper shadow-root stylesheet
    const swiperEl = this.$refs.ChatOptionsContainer;
    const swiperShadowRoot = swiperEl.shadowRoot;
    const style = document.createElement('style');
    style.textContent = `
 
      .swiper-button-prev, .swiper-button-next {
        width: 4rem !important;
        height: auto !important;
        position: absolute;
        background-color: oklch(100% 0 0);
        color: black;
        margin: 0;
        top: 0 !important;
        bottom: 0 !important;
        margin: 0 !important;
        opacity: .9;

        svg {
          position: inherit;
          width: fit-content !important;
          height: 2rem !important;

          path {
            fill: oklch(77.89% 0 0);
          }
        }
      }
      .swiper-button-prev:hover, .swiper-button-next:hover {
        opacity: 1;
      }

      .swiper-button-next {
        right: 0 !important;
        border-left: 1px solid oklch(77.89% 0 0);
      }
      .swiper-button-prev {
        left: 0 !important;
        border-right: 1px solid oklch(77.89% 0 0);
      }
      .swiper-button-disabled {
      display: none !important}
    `;

    swiperShadowRoot.appendChild(style);
    
    const swiperParams = {
      slidesPerView: 'auto',
      spaceBetween: '16',
      navigation: {
        enabled: true,
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
  };
  </script>

  <style scoped>
  
  </style>
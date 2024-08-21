<template>
  <swiper-container
    ref="imageCardContainer"
    class="swiper-container message message--image-card"
    style="--swiper-theme-color: oklch(48.82% 0.264 285.88); z-index: 0"
  >
    <swiper-slide
      class="swiper-slide article"
      v-for="(article, index) in content"
      :key="index"
    >
      <img class="image" :src="article.imgUrl" :alt="article.title" />
      <h3 class="title">{{ article.title }}</h3>
      <p class="content">{{ article.text }}</p>
      <a class="link" :href="article.articleUrl" target="_blank">Read more</a>
    </swiper-slide>
  </swiper-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const swiperEl = this.$refs.imageCardContainer;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: "16",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  },
};
</script>

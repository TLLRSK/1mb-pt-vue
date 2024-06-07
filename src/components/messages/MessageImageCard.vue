<template>
  <swiper-container ref="imageCardContainer"
    class="swiper-container message--image-card"
    style="
      --swiper-theme-color: oklch(69.71% 0.227 28.59);
    "
  >
    <swiper-slide class="swiper-slide article"
      v-for="(article, index) in content"
      :key="index"
    >
      <img :src="article.imgUrl" :alt="article.title" />
      <h3>{{ article.title }}</h3>
      <p>{{ article.text }}</p>
      <a :href="article.articleUrl" target="_blank">Read more</a>

    </swiper-slide>
  </swiper-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    },
  },
  mounted() {
    const swiperEl = this.$refs.imageCardContainer;
    
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: '16',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
</script>


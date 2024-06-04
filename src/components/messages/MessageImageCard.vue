<template>
    <section class="message--image-card">
        <article v-for="article in news" :key="article.title">
            <img :src="article.imgUrl" alt="">
            <h3>{{article.title}}</h3>
            <p>{{article.text}}</p>
            <a :href="article.articleUrl">Seguir leyendo</a>
        </article>
        <nav class="swiper-pagination"></nav>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                news: [
                    {
                        imgUrl: "",
                        title: "article title",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                        articleUrl: ""
                    }
                ]
            }
        }
    }
</script>

<style>
</style>
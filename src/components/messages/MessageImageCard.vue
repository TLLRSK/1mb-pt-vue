<template>
    <section class="message--image-card">
        <swiper-container
        :slides-per-view="1"
        pagination="true"
        >
            <swiper-slide v-for="(article, index) in news" :key="index">
                <img :src="article.imgUrl" alt="">
                <h3>{{article.title}}</h3>
                <p>{{article.text}}</p>
                <a :href="article.articleUrl">Seguir leyendo</a>
            </swiper-slide>
        </swiper-container>
    </section>
</template>

<script>
    import { register } from 'swiper/element/bundle';
    import { ref } from 'vue';
    register();

    export default {
        data() {
            return {
                news: [
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
                ]
            }
        }
    }
</script>
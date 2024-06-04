<template>
    <div class="swiper">
        <ul class="questions-carousel">
            <li v-for="question in questions" :key="question">
                <button>{{question }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                questions: [
                    "Qué es un chatbot",
                    "Para qué sirve",
                    "Qué es 1milionbot",
                    "Qué es una IA",
                ]
            }
        }
    }
</script>
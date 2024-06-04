<template>
    <ul>
        <li v-for="option in menuOptions" :key="option">
            {{ option.text }}
        </li>
    </ul>
</template>

<script>

    export default {
        data() {
            return {
                menuOptions: [
                    { text: "forget user data"},
                    { text: "change language"},
                    { text: "access the privacy policy."},
                ]
            }
        }
    }
</script>

<style></style>
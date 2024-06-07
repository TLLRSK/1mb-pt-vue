<template>
    <button class="btn btn--menu-item" @click="toggleDropdownMenu">{{ option.text }}</button>
</template>
<script>
    export default {
        props: {
            option: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    <button class="btn btn--dropdown-menu" @click="toggleDropdownMenu">
        <icon-menu/>
    </button>
</template>
<script>
import { mapMutations } from 'vuex';
    import IconMenu from '../icons/IconMenu.vue';
    export default {
        components: {
            IconMenu,
        },
        methods: {
            ...mapMutations(['toggleDropdownMenu']),
        }
    }
</script>
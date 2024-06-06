<template>
    <div class="dropdown-menu">
        <button class="btn--dropdown-menu" @click="toggleDropdownMenu">
            <icon-menu/>
        </button>
        <ul :class="['list', {'open': isDropdownMenuOpen}]">
            <li class="list-item" v-for="option in dropdownMenuOptions" :key="option">
                <button @click="toggleDropdownMenu">{{ option.text }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import IconMenu from '../icons/IconMenu.vue';
    export default {
        components: {
            IconMenu,
        },
        computed: {
            ...mapState(['isDropdownMenuOpen', 'dropdownMenuOptions']),
        },
        methods: {
            ...mapMutations(['toggleDropdownMenu']),
        }
    }
</script>
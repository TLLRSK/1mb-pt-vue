<template>
    <div class="dropdown-menu">
       <button-toggle-dropdown/> 
        <ul :class="['list', {'open': isDropdownMenuOpen}]">
            <li class="list-item" v-for="option in dropdownMenuOptions" :key="option">
                <button @click="toggleDropdownMenu">{{ option.text }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import ButtonToggleDropdown from '../buttons/ButtonToggleDropdown.vue';
    
    export default {
        components: {
            ButtonToggleDropdown,
        },
        computed: {
            ...mapState(['isDropdownMenuOpen', 'dropdownMenuOptions']),
        },
        methods: {
            ...mapMutations(['toggleDropdownMenu']),
        }
    }
</script>
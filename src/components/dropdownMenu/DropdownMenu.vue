<template>
    <div class="dropdown-menu">
       <button-toggle-dropdown/> 
        <ul :class="['list', {'open': isDropdownMenuOpen}]">
            <li class="list-item" v-for="option in dropdownMenuOptions" :key="option">
                <button-menu-item :option="option"></button-menu-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import { ButtonToggleDropdown, ButtonMenuItem } from '../../data';
    
    export default {
        components: {
            ButtonToggleDropdown,
            ButtonMenuItem,
        },
        computed: {
            ...mapState(['isDropdownMenuOpen', 'dropdownMenuOptions']),
        },
        methods: {
            ...mapMutations(['toggleDropdownMenu']),
        }
    }
</script>
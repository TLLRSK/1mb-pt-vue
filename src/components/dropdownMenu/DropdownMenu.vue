<template>
    <div class="dropdown-menu-container">
       <button-toggle-dropdown @togglingMenu="toggleMenu"/> 

        <ul class="dropdown-menu"@mouseleave="closeMenu" ref="dropdownMenu">
            <li class="dropdown-menu-item" v-for="option in dropdownMenuOptions" :key="option">
                <button-menu-item :option="option"></button-menu-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import { ButtonToggleDropdown, ButtonMenuItem } from '../../data';
    
    export default {
        components: {
            ButtonToggleDropdown,
            ButtonMenuItem,
        },
        data()  {
            return {
                dropdownMenuToggler: null,
            }
        },
        computed: {
            ...mapState(['dropdownMenuOptions']),
        },
        methods: {
            openMenu() {
                this.dropdownMenuToggler.checked = true;
                setTimeout(() => {
                    document.addEventListener('click', this.onClick)
                }, 100) 
            },
            closeMenu() {
                this.dropdownMenuToggler.checked = false;
                document.removeEventListener('click', this.onClick)
            },
            onClick(e) {
                const target = e.target;
                if (!this.$refs.dropdownMenu.contains(target)) {this.closeMenu()} ;
            },
            toggleMenu(checked) {
                checked ? this.closeMenu() : this.openMenu()
            },
        },
        mounted() {
            this.dropdownMenuToggler = document.querySelector('.dropdown-toggler');
        },
    }
</script>
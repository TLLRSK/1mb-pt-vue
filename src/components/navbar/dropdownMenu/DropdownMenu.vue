<template>
    <button @click="toggleDropdownMenu">MENU</button>
    <ul :class="['dropdown-menu', {'open': isMenuOpen}]">
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
                ],
                isMenuOpen: false,
            }
        },
        methods: {
            toggleDropdownMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>

<style>
    .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        bottom: 0;
        right: 0;
    }
    .dropdown-menu.open {
        display: flex;
        flex-direction: column;
    }
</style>
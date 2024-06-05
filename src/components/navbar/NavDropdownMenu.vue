<template>
    <div class="dropdown-menu">
        <button class="btn--dropdown-menu" @click="toggleDropdownMenu">
            <span class="btn-bullet">open</span>
        </button>
        <ul :class="['list', {'open': isMenuOpen}]">
            <li class="list-item" v-for="option in menuOptions" :key="option">
                <a href="">{{ option.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuOptions: [
                    { text: "Forget user data"},
                    { text: "Change language"},
                    { text: "Access the privacy policy"},
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
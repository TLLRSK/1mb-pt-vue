<template>
    <div class="dropdown-menu">
        <button class="btn--dropdown-menu" @click="toggleDropdownMenu">
            <span class="btn-bullet">open</span>
        </button>
        <ul :class="['list', {'open': isMenuOpen}]">
            <li class="list-item-" v-for="option in menuOptions" :key="option">
                {{ option.text }}
            </li>
        </ul>
    </div>
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
<template>
  <label
    for="dropdown-toggler"
    class="btn btn--toggle-dropdown"
    :class="buttonClasses"
    @click="togglingMenu"
  >
    <input
      type="checkbox"
      id="dropdown-toggler"
      class="dropdown-toggler"
      ref="dropdownToggler"
    />
    <icon-menu />
  </label>
</template>
<script>
import IconMenu from "../icons/IconMenu.vue";
export default {
  components: {
    IconMenu,
  },
  data() {
    return {
        isAnimating: false,
    }
  },
  computed: {
  buttonClasses() {
    return { "anim--scale-bounce": this.isAnimating }
  },
},
  methods: {
    togglingMenu() {

      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 800)

      const toggler = this.$refs.dropdownToggler;
      this.$emit("togglingMenu", toggler.checked);
    },
  },
};
</script>


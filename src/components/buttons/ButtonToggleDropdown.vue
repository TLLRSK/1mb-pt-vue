<template>
  <label
    for="dropdown-toggler"
    class="btn btn--toggle-dropdown"
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
  methods: {
    togglingMenu() {
      const toggler = this.$refs.dropdownToggler;
      this.$emit("togglingMenu", toggler.checked);
    },
  },
};
</script>

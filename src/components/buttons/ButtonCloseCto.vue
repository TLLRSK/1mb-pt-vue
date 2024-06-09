<template>
  <button class="btn btn--close-cto" @click.stop="closeCto">
    <icon-close />
  </button>
</template>
<script>
import { mapMutations } from "vuex";
import { IconClose } from "../../data";
export default {
  components: {
    IconClose,
  },
  methods: {
    ...mapMutations(["closeCto"]),
  },
};
</script>

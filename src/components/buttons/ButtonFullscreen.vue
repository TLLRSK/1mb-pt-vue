<template>
    <button class="btn btn--toggle-fullscreen" @click="toggleFullscreen">
        <icon-fullscreen-off v-if="isFullscreen"/>
        <icon-fullscreen v-else/>
    </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
    import { IconFullscreen, IconFullscreenOff } from '../../data';
    export default {
        components: {
            IconFullscreen,
            IconFullscreenOff,
        },
        computed:  {
            ...mapState(['isFullscreen']),
        },
        methods: {
            ...mapMutations(['toggleFullscreen'],)
        }
    }
</script>
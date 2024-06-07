<template>
    <label for="maximize" class="btn btn--maximize">
        <input type="checkbox" id="maximize" class="maximize-toggler">
        <icon-maximize/>
    </label>
</template>

<script>
    import { IconMaximize } from '../../data';
    export default {
        components: {
            IconMaximize,
        }
    }
</script>
<script setup lang="ts">
const props = defineProps({
    likes: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div id="Likes" class="">
        <span class="text-white/50 text-sm font-light block"> {{ likes.length }} J'aime </span>
    </div>
</template>

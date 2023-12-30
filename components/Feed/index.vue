<script setup lang="ts">
const props = defineProps({
    feed: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <section id="Feed">
        <FeedThread v-for="thread in feed" :key="thread.id" :thread="thread" />
    </section>
</template>

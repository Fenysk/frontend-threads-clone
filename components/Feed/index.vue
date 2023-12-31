<script setup lang="ts">
const props = defineProps({
    feed: {
        type: Object,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <section id="Feed">
        <div v-for="thread in feed" :key="thread.id">
            <Thread :thread="thread" :mode />
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    feed: {
        type: Object,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    }
});
</script>

<template>
    <section id="Feed">
        <div v-for="thread in feed" :key="thread.id">
            <!-- <Debug :data="mode" /> -->
            <Thread :thread="thread" :mode />
            <Thread v-if="thread.Children?.length > 0 && mode === 'profile'" :thread="thread.Children[0]" :mode />
        </div>
    </section>
</template>

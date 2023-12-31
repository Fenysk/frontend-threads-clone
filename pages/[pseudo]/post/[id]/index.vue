<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const route = useRoute();

const { getThreadById } = useThreads();

const thread = await getThreadById(route.params.id);
</script>

<template>
    <main class="container mx-auto">
        <Thread :thread="thread" :mode="'post'" v-if="thread" />
        <Debug :data="thread" />
    </main>
</template>

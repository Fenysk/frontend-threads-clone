<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getMyFollowingFeed } = useThreads();

const feed = await getMyFollowingFeed();
</script>

<template>
    <main class="container mx-auto">Hello world</main>
    <pre>{{ feed }}</pre>
</template>

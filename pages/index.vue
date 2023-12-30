<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getMyFollowingFeed } = useThreads();

const feed = await getMyFollowingFeed();
</script>

<template>
    <main>
        <Feed :feed="feed" />
    </main>
</template>

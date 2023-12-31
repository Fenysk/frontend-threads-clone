<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getMyFollowingFeed } = useThreads();

const feed = ref<any[]>([]);

onBeforeMount(async () => {
    feed.value = await getMyFollowingFeed();
});
</script>

<template>
    <main>
        <Feed :feed="feed" v-if="feed" :mode="'feed'" />
    </main>
</template>

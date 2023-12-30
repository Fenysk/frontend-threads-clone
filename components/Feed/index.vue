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
        <div v-for="thread in feed" :key="thread.id">
            <FeedThread :thread="thread" />
            <FeedThread
                v-if="
                    thread.Children?.length > 0 &&
                    thread.Children[thread.Children.length - 1].userId === thread.userId
                "
                :thread="thread.Children[thread.Children.length - 1]"
            />
            <!-- <Debug :data="thread" /> -->
        </div>
    </section>
</template>

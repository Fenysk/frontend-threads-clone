<script setup lang="ts">
const props = defineProps({
    pseudo: {
        type: String,
        required: true,
    },
});

const { getThreadsByPseudo } = useThreads();

const route = useRoute();
const selectedTab = ref(route.params.tab || "threads");

const threads = ref(null);
const replies = ref(null);
const reposts = ref(null);

const feed = computed(async () => {
    switch (selectedTab.value) {
        case "replies":
            return replies.value = await getThreadsByPseudo(props.pseudo);
        case "reposts":
            return reposts.value = await getThreadsByPseudo(props.pseudo);
        default:
            return threads.value = await getThreadsByPseudo(props.pseudo);
    }
});

</script>

<template>
    <div>
        <div class="flex mt-4 text-white/70 cursor-pointer">
            <NuxtLink :to="`/${props.pseudo}`"
                class="w-full text-center border-b py-2 active:border-white/40 active:text-white/40"
                :class="selectedTab === 'threads' ? 'border-white text-white' : 'border-transparent'">Threads</NuxtLink>
            <NuxtLink :to="`/${props.pseudo}/replies`"
                class="w-full text-center border-b py-2 active:border-white/40 active:text-white/40"
                :class="selectedTab === 'replies' ? 'border-white text-white' : 'border-transparent'">Replies</NuxtLink>
            <NuxtLink :to="`/${props.pseudo}/reposts`"
                class="w-full text-center border-b py-2 active:border-white/40 active:text-white/40"
                :class="selectedTab === 'reposts' ? 'border-white text-white' : 'border-transparent'">Reposts</NuxtLink>
        </div>

        <Feed v-if="feed" :feed="threads" :mode="selectedTab" />
    </div>
</template>

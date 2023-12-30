<script setup lang="ts">
const props = defineProps({
    thread: {
        type: Object,
        required: true,
    },
});

const openModal = (modalName: string) => {
    alert(modalName);
};

const handleLike = () => {
    alert("like");
};
</script>

<template>
    <div id="Actions" class="flex items-center -translate-x-2">
        <button
            @click="handleLike"
            class="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all"
        >
            <IconsFavorite class="text-xl" />
        </button>
        <button
            @click="openModal('thread-answer')"
            class="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all"
        >
            <IconsBubble class="text-xl" />
        </button>
        <button
            @click="openModal('thread-repost')"
            class="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all"
        >
            <IconsRepost class="text-xl" />
        </button>
        <button
            @click="openModal('thread-share')"
            class="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all"
        >
            <IconsShare class="text-xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    thread: {
        type: Object;
        required: true;
    };
}>();

const openModal = (modalName: string) => {
    alert(modalName);
};
</script>

<template>
    <div id="Actions" class="flex gap-4 h-9">
        <button @click="openModal('Like')" id="Likes">
            <IconsFavorite class="text-xl" />
        </button>
        <button @click="openModal('Comment')" id="Comments">
            <IconsBubble class="text-xl" />
        </button>
        <button @click="openModal('Repost')" id="Reposts">
            <IconsRepost class="text-xl" />
        </button>
        <button @click="openModal('Share')" id="Share">
            <IconsShare class="text-xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    participants: {
        type: Object;
        required: true;
    };
}>();
</script>

<template>
    <div
        id="Avatars"
        class="relative w-full"
        :class="{
            'sclale-90': participants.length > 2,
        }"
    >
        <div
            id="Avatar1"
            :class="{
                'mx-auto': participants.length === 1,
                'absolute left-0': participants.length > 1,
                'translate-x-2 translate-y-2 scale-50': participants.length > 2,
            }"
        >
            <img
                v-if="participants[0].Profile?.avatarUrl"
                :src="participants[0].Profile?.avatarUrl"
                class="h-4 w-4 object-cover rounded-full"
            />
            <div v-else class="h-4 w-4 bg-gray-300 rounded-full"></div>
        </div>

        <div
            id="Avatar2"
            v-if="participants.length > 1"
            :class="{
                'absolute right-0': participants.length === 2,
                'absolute -left-1 -top-1 scale-90': participants.length > 2,
            }"
        >
            <img
                v-if="participants[1].Profile?.avatarUrl"
                :src="participants[1].Profile?.avatarUrl"
                class="h-4 w-4 object-cover rounded-full"
            />
            <div v-else class="h-4 w-4 bg-gray-300 rounded-full"></div>
        </div>

        <div
            id="Avatar3"
            v-if="participants.length > 2"
            class="absolute -right-1 -translate-y-2 scale-110"
        >
            <img
                v-if="participants[2].Profile?.avatarUrl"
                :src="participants[2].Profile?.avatarUrl"
                class="h-4 w-4 object-cover rounded-full"
            />
            <div v-else class="h-4 w-4 bg-gray-300 rounded-full"></div>
        </div>
    </div>
</template>

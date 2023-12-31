<script setup lang="ts">
const props = defineProps({
    marginTop: {
        type: Boolean,
        required: true,
    },
    marginBottom: {
        type: Boolean,
        required: true,
    },
});

// if margin, set 2
const margins = ref("");

if (props.marginTop) margins.value += "mt-2 rounded-t-full ";

if (props.marginBottom) margins.value += "mb-2 ";
</script>

<template>
    <div
        class="block w-[2px] mx-auto bg-white/15 h-full min-h-6"
        :class="margins"
    ></div>
</template>

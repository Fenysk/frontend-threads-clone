<script setup lang="ts">
const props = defineProps<{
    subject: {
        type: string;
        required: true;
    };
    data: {
        type: Object;
        required: true;
    };
    separation: {
        type: Boolean;
        required: false;
    };
}>();

const textToDisplay = ref<string>("");

switch (props?.subject) {
    case "likes":
        textToDisplay.value = `${props?.data?.length} mention${
            props?.data?.length > 1 ? "s" : ""
        } J'aime`;
        break;

    case "comments":
        textToDisplay.value = `${props?.data?.length} réponse${
            props?.data?.length > 1 ? "s" : ""
        }`;
        break;

    default:
        break;
}
</script>

<template>
    <div id="Stats" class="flex" v-if="data?.length > 0">
        <span class="text-sm">
            {{ textToDisplay }}
        </span>
        <span v-if="separation" class="text-sm px-1">•</span>
    </div>
</template>

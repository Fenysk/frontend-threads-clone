<script setup lang="ts">
const authStore = useAuthStore();
const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);

const props = defineProps({
    data: {
        type: Object as PropType<any>,
        required: true,
    },
});
</script>

<template>
    <section id="Debug" class="bg-gray-800 p-1 w-full overflow-auto">
        <div>
            <pre class="text-white text-xs">{{ data }}</pre>
        </div>
    </section>
</template>

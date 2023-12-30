<script setup lang="ts">
const authStore = useAuthStore();
const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);
</script>

<template>
    <section id="Debug" class="bg-gray-800 p-2 w-screen overflow-auto">
        <div>
            <span class="text-lg">currentUser</span>
            <pre>{{ currentUser }}</pre>
        </div>
    </section>
</template>

<script setup lang="ts">
const user = ref({
    pseudo: "fenysk",
});
</script>

<template>
    <div class="container mx-auto h-[60px] sm:h-[74px]">
        <header class="flex justify-between items-center h-full">
            <div id="branding">
                <NuxtLink to="/"> Threads </NuxtLink>
            </div>

            <nav id="menu">
                <NuxtLink to="/"> Feed </NuxtLink>
                <NuxtLink to="/search"> Search </NuxtLink>
                <button @click="openModal('create-thread')">New Thread</button>
                <NuxtLink to="/activity"> Activity </NuxtLink>
                <NuxtLink :to="`/@${user.pseudo}`"> Profile </NuxtLink>
            </nav>

            <div class="settings">
                <button @click="openModal('options')">Options</button>
            </div>
        </header>
    </div>
</template>
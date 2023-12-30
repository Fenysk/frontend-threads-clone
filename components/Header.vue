<script setup lang="ts">
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);
</script>

<template>
    <div class="container mx-auto h-[60px] sm:h-[74px]">
        <header class="flex justify-between items-center h-full text-[#4D4D4D]">
            <div id="branding">
                <NuxtLink to="/">
                    <IconsThreadsLogo
                        class="text-[40px] text-white hover:scale-105 transition"
                    />
                </NuxtLink>
            </div>

            <nav id="menu">
                <ul class="flex items-center gap-1">
                    <li class="relative cursor-pointer">
                        <NuxtLink to="/" class="block py-4 px-7">
                            <IconsHouse class="text-[32px]" />
                        </NuxtLink>
                        <div
                            id="Animation"
                            class="absolute top-0 left-0 w-full h-full block scale-75 rounded-xl transition -z-10"
                        ></div>
                    </li>
                    <li class="relative cursor-pointer">
                        <NuxtLink to="/search" class="block py-4 px-7">
                            <IconsSearch class="text-[32px]" />
                        </NuxtLink>
                        <div
                            id="Animation"
                            class="absolute top-0 left-0 w-full h-full block scale-75 rounded-xl transition -z-10"
                        ></div>
                    </li>
                    <li class="relative cursor-pointer">
                        <button
                            @click="openModal('create-thread')"
                            class="block py-4 px-7"
                        >
                            <IconsPen class="text-[32px]" />
                        </button>
                        <div
                            id="Animation"
                            class="absolute top-0 left-0 w-full h-full block scale-75 rounded-xl transition -z-10"
                        ></div>
                    </li>
                    <li class="relative cursor-pointer">
                        <NuxtLink to="/activity" class="block py-4 px-7">
                            <IconsFavorite class="text-[32px]" />
                        </NuxtLink>
                        <div
                            id="Animation"
                            class="absolute top-0 left-0 w-full h-full block scale-75 rounded-xl transition -z-10"
                        ></div>
                    </li>
                    <li class="relative cursor-pointer">
                        <NuxtLink
                            :to="`/@${currentUser?.Profile?.pseudo}`"
                            class="block py-4 px-7"
                        >
                            <IconsPerson class="text-[32px]" />
                        </NuxtLink>
                        <div
                            id="Animation"
                            class="absolute top-0 left-0 w-full h-full block scale-75 rounded-xl transition -z-10"
                        ></div>
                    </li>
                </ul>
            </nav>

            <div class="settings flex items-center">
                <button @click="openModal('options')" class="p-4 hover:text-white">
                    <IconsBurger class="text-[32px]" />
                </button>
            </div>
        </header>
    </div>
</template>

<style scoped>
li:hover > #Animation {
    background-color: rgba(255, 255, 255, 0.06);
    transform: scale(1);
}
</style>

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
                    <IconsThreadsLogo class="text-[40px] text-white" />
                </NuxtLink>
            </div>

            <nav id="menu">
                <ul class="flex items-center">
                    <li>
                        <NuxtLink to="/" class="py-5 px-8 block">
                            <IconsHouse class="text-[32px]" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/search" class="py-5 px-8 block">
                            <IconsSearch class="text-[32px]" />
                        </NuxtLink>
                    </li>
                    <li>
                        <button
                            @click="openModal('create-thread')"
                            class="py-5 px-8 block"
                        >
                            <IconsPen class="text-[32px]" />
                        </button>
                    </li>
                    <li>
                        <NuxtLink to="/activity" class="py-5 px-8 block">
                            <IconsFavorite class="text-[32px]" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            :to="`/@${currentUser?.Profile.pseudo}`"
                            class="py-5 px-8 block"
                        >
                            <IconsPerson class="text-[32px]" />
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="settings">
                <button @click="openModal('options')">
                    <IconsBurger class="text-[32px]" />
                </button>
            </div>
        </header>
    </div>
</template>

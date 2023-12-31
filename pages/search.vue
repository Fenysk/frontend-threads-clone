<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware"
});

const searchInput = ref("");
const isSearching = computed(() => searchInput.value.length > 0 && isFocus.value);
const isFocus = ref(false);

const earaseSearchInput = () => searchInput.value = "";

const handleSearchPeople = (input: string) => {
    console.log(input);
};
</script>

<template>
    <main>
        <div class="relative w-full transition-all right-0 mt-1"
            :class="isSearching ? 'w-[calc(100%+32px)] right-[16px]' : ''">
            <input v-model="searchInput" type="text" :class="isSearching ? 'rounded-b-none' : ''" @focus="isFocus = true"
                @blur="isFocus = false"
                class="w-full px-12 py-4 border border-white/20 bg-black/30 rounded-2xl outline-none transition-none placeholder:text-white/40 placeholder:font-light"
                placeholder="Rechercher" />
            <IconsSearch class="absolute top-[29px] left-6 text-lg transform -translate-y-1/2 text-white/30" />
            <IconsCancel v-if="searchInput.length > 0" @mousedown.prevent="earaseSearchInput"
                class="absolute top-7 right-6 text-lg transform -translate-y-1/2 text-white/30 cursor-pointer" />

            <div :class="isSearching ? 'h-32 max-h-[50vh] border' : 'h-0'"
                class="w-full border-t-0 rounded-b-2xl border-white/20 bg-black/30 overflow-hidden transition-all"></div>

        </div>
    </main>
</template>

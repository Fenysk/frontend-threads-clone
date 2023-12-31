<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getProfileByPseudo } = useUsers();
const { getThreadsByPseudo } = useThreads();

const route = useRoute();
const pseudo = route.params.pseudo;

const profile = ref(null);
const threads = ref(null);

onBeforeMount(async () => {
    profile.value = await getProfileByPseudo(pseudo);
    threads.value = await getThreadsByPseudo(pseudo);
});
</script>

<template>
    <main>
        <ProfileCard v-if="profile" :profile="profile" />
        <Feed v-if="threads" :feed="threads" :mode="'profile'" />
        <Debug :data="threads" />
    </main>
</template>

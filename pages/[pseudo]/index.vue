<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getProfileByPseudo } = useUsers();


const route = useRoute();
const pseudo = route.params.pseudo;

const profile = ref(null);

onBeforeMount(async () => {
    profile.value = await getProfileByPseudo(pseudo);
});
</script>

<template>
    <main>
        <ProfileCard v-if="profile" :profile="profile" />
        <Tabs :pseudo="pseudo" />

        <Debug :data="threads" />
    </main>
</template>

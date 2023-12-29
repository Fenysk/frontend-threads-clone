<script setup lang="ts">
definePageMeta({
    middleware: "auth-middleware",
});

const { getUserByPseudo } = useUsers();
const { getMyThreads } = useThreads();

const route = useRoute();
const pseudo = route.params.pseudo;

const user = await getUserByPseudo(pseudo);
const threads = await getMyThreads();
</script>

<template>
    <main class="container mx-auto">Hello {{ user.pseudo }}</main>
    <pre>{{ user }}</pre>
    <pre>{{ threads }}</pre>
</template>

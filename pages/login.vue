<script setup lang="ts">
definePageMeta({
    layout: "login",
});

const openBox = (id: string) => {
    const box = document.getElementById(id);
    box.style.height = "auto";
    box.style.paddingTop = "1rem";
};

const email = ref<string>("minefenysk@gmail.com");
const password = ref<string>("password");

const { login } = useAuth();
const handleLogin = async () => {
    await login(email.value, password.value);
    navigateTo("/");
};
</script>

<template>
    <main class="px-4">
        <img
            src="~/assets/images/decoration.webp"
            alt="Threads banner"
            class="h-[510px] object-cover fixed -z-10 top-0 left-0 right-0 w-full"
        />
        <section class="pt-[30vh] flex flex-col items-center gap-4">
            <span class="text-lg font-semibold text-center"
                >Comment souhaitez-vous utiliser Threads ?</span
            >

            <div
                class="border-[1px] border-white/20 rounded-xl max-w-96 p-6 cursor-pointer"
                @click="openBox('login-box')"
            >
                <span class="font-semibold">Se connecter</span>
                <span class="block mt-2 text-xs text-white/50">
                    Connectez-vous ou creez-vous un compte pour publier du contenu et
                    interagir sur Threads.</span
                >
                <div id="login-box" class="h-0 overflow-hidden transition-all">
                    <form class="flex flex-col gap-4">
                        <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            v-model="email"
                            class="w-full border-[1px] border-white/20 rounded-xl px-4 py-2 text-black"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            v-model="password"
                            class="w-full border-[1px] border-white/20 rounded-xl px-4 py-2 text-black"
                        />
                        <button
                            @click.prevent="handleLogin"
                            type="submit"
                            class="w-full bg-blue-600 text-white font-semibold rounded-xl px-4 py-2"
                        >
                            Se connecter
                        </button>
                    </form>
                </div>
            </div>

            <div class="border-[1px] border-white/20 rounded-xl max-w-96 p-6">
                <span class="font-semibold block">Utiliser sans profil</span>
                <span class="block mt-2 text-xs text-white/50"
                    >Vous pouvez naviguer dans Threads sans profil, mais vous ne pourrez
                    pas interagir avec du contenu ni en publier.</span
                >
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
defineProps({
    profile: {
        type: Object,
        required: true,
    },
});

const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);

const openModal = (modalName: string) => {
    console.log(modalName);
};
</script>

<template>
    <div id="ProfileCard" class="flex flex-col py-4">
        <div id="Header" class="flex justify-between items-start">
            <div id="Names" class="flex flex-col">
                <h1 id="DisplayName" class="text-2xl font-bold">
                    {{ profile.displayName }}
                </h1>
                <span id="Pseudo" class="text-sm">
                    {{ profile.pseudo }}
                </span>
            </div>
            <div id="Avatar">
                <img
                    v-if="!!profile.avatarUrl"
                    :src="profile.avatarUrl"
                    :alt="profile.displayName"
                />
                <img v-else class="w-20 h-20 rounded-full bg-gray-300" />
            </div>
        </div>
        <div id="Body">
            <p v-if="!!profile.biography" id="Bio" class="text-base">
                {{ profile.biography }}
            </p>
        </div>
        <div id="Footer" class="text-sm text-white/50 mt-4">
            <div id="Followers" v-if="profile.User.Followers.lenght > 0"></div>
            <span v-if="profile.User.Followers.lenght > 0">•</span>
            <a
                v-if="!!profile.link"
                :href="profile.link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {{ profile.link.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "") }}
            </a>
        </div>

        <button
            @click="openModal('modify-profile')"
            v-if="profile.User.id === currentUser.id"
            id="Modify"
            class="border-[1px] border-white/20 rounded-xl py-1 mt-6"
        >
            Modifier le profil
        </button>
    </div>
</template>

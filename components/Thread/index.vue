<script setup lang="ts">
/** EXAMPLE OF THREAD
 * {
 * "id": "c7cadb28-9608-474c-8c1a-97d320a7dddb",
		"content": "Voici un sondage :",
		"subject": null,
		"hiddenForAll": false,
		"hiddenBy": null,
		"userId": "0ee88e194c8a41a89b466e42310be5f0",
		"parentId": null,
		"createdAt": "2023-12-29T20:51:32.421Z",
		"updatedAt": "2023-12-29T20:51:32.421Z",
		"User": {
			"id": "0ee88e194c8a41a89b466e42310be5f0",
			"email": "minefenysk@gmail.com",
			"password": "$argon2id$v=19$m=65536,t=3,p=4$tZwOECSeYGDB+Z/4v2RwPw$tzjPZ1Sb7Ou2/it5gIFYaB9d9S+IQGyEa/WZyvEjw84",
			"confirmed": true,
			"isPrivate": false,
			"confirmationId": null,
			"refreshToken": "$argon2id$v=19$m=65536,t=3,p=4$9IV9N05OHJf2sDZjxSrP/w$hko+jSV05hF0IJAJ7Ww27He9YnJnpEL/e1yG96ySawk",
			"roles": [
				"USER"
			],
			"createdAt": "2023-12-28T16:22:06.387Z",
			"updatedAt": "2023-12-30T09:03:38.689Z",
			"Profile": {
				"pseudo": "Fenysk_",
				"displayName": "Fenysk",
				"biography": "👨‍💻 Développeur web",
				"avatarUrl": null,
				"link": "https://github.com/fenysk/",
				"userId": "0ee88e194c8a41a89b466e42310be5f0",
				"createdAt": "2023-12-28T16:22:06.387Z",
				"updatedAt": "2023-12-29T21:06:29.369Z"
			}
		},
		"Poll": {
			"id": "2a2fa02b-e634-4c9b-83c2-9809c74d5984",
			"threadId": "c7cadb28-9608-474c-8c1a-97d320a7dddb",
			"createdAt": "2023-12-29T20:51:32.421Z",
			"updatedAt": "2023-12-29T20:51:32.421Z",
			"Options": [
				{
					"id": "7475542d-9d58-4554-bb46-3faca349c067",
					"pollId": "2a2fa02b-e634-4c9b-83c2-9809c74d5984",
					"content": "Oui",
					"createdAt": "2023-12-29T20:51:32.421Z",
					"updatedAt": "2023-12-29T20:51:32.421Z"
				},
				{
					"id": "42ee63be-9228-46db-86bd-30d43490e44f",
					"pollId": "2a2fa02b-e634-4c9b-83c2-9809c74d5984",
					"content": "Non",
					"createdAt": "2023-12-29T20:51:32.421Z",
					"updatedAt": "2023-12-29T20:51:32.421Z"
				},
				{
					"id": "8f20724e-49bc-4e4e-9d67-66a1923afc85",
					"pollId": "2a2fa02b-e634-4c9b-83c2-9809c74d5984",
					"content": "Je ne sais pas",
					"createdAt": "2023-12-29T20:51:32.421Z",
					"updatedAt": "2023-12-29T20:51:32.421Z"
				}
			]
		},
		"Likes": [],
		"Reposts": [],
		"Children": []
	},
 */

import { defineProps } from "vue";

const props = defineProps({
    thread: {
        type: Object,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
});

const { transformDateToTimeAgo } = useUtils();
const createdAgo = transformDateToTimeAgo(new Date(props.thread.createdAt));

const participants = props.thread.Children?.map((thread) => thread.User).filter(
    (user, index, self) => index === self.findIndex((u) => u.id === user.id)
);

const openModal = (modalName: string) => {
    alert(modalName);
};

const hasStats = props.thread.Children?.length > 0 || props.thread.Likes?.length > 0;
</script>

<template>
    <div
        id="Thread"
        class="flex flex-col pb-1"
        :class="thread.parentId ? '' : 'border-t-[1px] border-white/10 pt-3'"
    >
        <!-- <Debug :data="mode" /> -->
        <div class="flex flex-row items-stretch gap-3">
            <aside class="flex flex-col justify-stretch pt-2">
                <img
                    v-if="thread.User.Profile?.avatarUrl"
                    :src="thread.User.Profile?.avatarUrl"
                    class="w-8 h-8 object-cover rounded-full"
                />
                <div v-else class="w-8 h-8 bg-gray-500 rounded-full"></div>
                <ThreadWire
                    v-if="thread.Children?.length > 0"
                    :marginTop="true"
                    :marginBottom="
                        (mode !== 'feed' && thread.Children?.length === 0) ||
                        (mode === 'feed' && thread.Children?.length > 0)
                    "
                />
            </aside>

            <div id="Content" class="w-full">
                <header class="flex flex-row justify-between">
                    <span class="block">{{ thread.User.Profile?.pseudo }}</span>
                    <div class="flex flex-row items-center gap-2">
                        <span class="block font-light text-sm text-white/50">{{
                            createdAgo
                        }}</span>
                        <div id="Options"><IconsSuspension class="text-xl" /></div>
                    </div>
                </header>
                <NuxtLink
                    :to="`${thread.User.Profile?.pseudo}/post/${thread.id}`"
                    class="block font-light"
                    >{{ thread.content }}</NuxtLink
                >
                <ThreadActions :thread="thread" />
            </div>
        </div>

        <footer class="flex flex-row items-stretch gap-3 h-4 mb-2" v-if="hasStats">
            <aside class="w-8">
                <ThreadAvatars
                    :participants
                    v-if="mode === 'feed' && thread.Children?.length > 0"
                />
                <ThreadWire
                    v-else-if="thread.Children?.length > 0"
                    :marginTop="thread.Parent?.length === 0"
                    :marginBottom="false"
                />
            </aside>

            <div class="w-full flex items-center text-white/50 mt-1">
                <ThreadStats
                    :subject="'comments'"
                    :data="thread.Children"
                    :separation="thread.Likes?.length > 0"
                />
                <ThreadStats
                    :subject="'likes'"
                    :data="thread.Likes"
                    :separation="thread.Reposts?.length > 0"
                />
            </div>
        </footer>
    </div>

    <!-- <Debug :data="thread" class="my-4" /> -->
</template>

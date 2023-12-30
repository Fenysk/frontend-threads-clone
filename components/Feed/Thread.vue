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
});

const { transformDateToTimeAgo } = useUtils();
const timeAgo = transformDateToTimeAgo(new Date(props.thread.createdAt));

const openModal = (modalName: string) => {
	alert(modalName);
};
</script>

<template>
    <div
        id="Thread"
        class="flex flex-row justify-between gap-3 w-full pt-3 border-t-[1px] border-white/10"
    >
        <div id="Participants">
            <div id="Author" class="pt-1">
                <img
                    v-if="thread.User.Profile.avatarUrl"
                    :src="thread.User.Profile.avatarUrl"
                    alt="Author avatar"
                    class="w-9 h-9 rounded-full"
                />
                <div v-else class="w-9 h-9 rounded-full bg-gray-700"></div>
            </div>
            <!-- <FeedThreadLine /> -->
        </div>

        <div id="Content" class="w-full flex flex-col">
            <div id="Header" class="flex justify-between">
                <span class="text-lg">{{ thread.User.Profile.pseudo }}</span>
                <div class="flex flex-row flex-nowrap items-center">
                    <span class="text-white/50 font-light text-sm block">{{ timeAgo }}</span>
					<button @click="openModal('thread-options')" class="block p-2 rounded-full hover:bg-white/5 transition-all"><IconsSuspension class="text-white text-xl" /></button>
                </div>
            </div>
            <span class="text-base font-light">{{ thread.content }}</span>
        </div>
    </div>

    <pre class="overflow-auto">{{ thread }}</pre>
</template>

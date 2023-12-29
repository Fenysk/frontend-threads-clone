export const useUserStore = defineStore('user', () => {

    const currentUser = ref<any | null>(null)

    const hasUser = computed(() => !!currentUser.value)

    const getCurrentUser = computed(() => currentUser.value);

    const setUser = (user: any | null) => {
        currentUser.value = user
    }

    return {
        currentUser,

        hasUser,
        getCurrentUser,

        setUser
    }
})
export const useAuthStore = defineStore('auth', () => {

    const accessToken = ref<string | null>(null)

    const isAuthenticated = computed(() => !!accessToken.value)

    const setAccessToken = (token: string | null) => {
        accessToken.value = token
    }

    return {
        accessToken,

        isAuthenticated,
        setAccessToken
    }
})
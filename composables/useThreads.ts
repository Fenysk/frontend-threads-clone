export const useThreads = () => {

    const config = useRuntimeConfig()
    const API_URL = config.public.API_URL;

    const authStore = useAuthStore();

    const getMyThreads = async () => {
        try {
            const response = await fetch(`${API_URL}/threads/mine`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`
                },
            })
            const threads = await response.json();

            return threads;
        } catch (error) {
            console.log(error);
        }
    }

    const getThreadsByPseudo = async (pseudo: string) => {
        try {
            const response = await fetch(`${API_URL}/threads/pseudo/${pseudo.substring(1)}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`
                },
            })
            const threads = await response.json();

            return threads;
        } catch (error) {
            throw new Error(error)
        }
    }

    const getMyFollowingFeed = async (page: number = 1) => {
        try {
            const response = await fetch(`${API_URL}/threads/feed/following/${page}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`
                },
            })
            const threads = await response.json();

            return threads;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getMyThreads,
        getThreadsByPseudo,
        getMyFollowingFeed
    }

}
export const useUsers = () => {

    const config = useRuntimeConfig()
    const API_URL = config.public.API_URL;

    const authStore = useAuthStore();

    const getCurrentUser = async () => {
        try {
            const response = await fetch(`${API_URL}/users/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`
                }
            })
            const user = await response.json();

            return user;
        } catch (error) {
            console.log(error);
        }
    }

    const getUserByPseudo = async (pseudo: string) => {
        try {
            const response = await fetch(`${API_URL}/users/pseudo/${pseudo.substring(1)}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`
                }
            })
            const user = await response.json();

            return user;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getCurrentUser,
        getUserByPseudo,
    }

}
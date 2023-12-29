import { useAuthStore } from '~/stores/authStore';

export const useAuth = () => {

    const config = useRuntimeConfig()
    const API_URL = config.public.API_URL;

    const cookieRefreshToken = useCookie('refreshToken');
    const authStore = useAuthStore();

    const { getCurrentUser } = useUsers();
    const userStore = useUserStore();

    const storeTokens = (tokens: { accessToken: string, refreshToken: string }) => {
        const { accessToken, refreshToken } = tokens;

        authStore.setAccessToken(accessToken);
        cookieRefreshToken.value = refreshToken;

        console.log('Tokens have been stored !');
    }

    const login = async (email: string, password: string) => {
        try {

            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const tokens = await response.json();
            storeTokens(tokens);

            const user = await getCurrentUser();
            userStore.setUser(user);

            return true;
        } catch (error) {
            const tokens = { accessToken: null, refreshToken: null }
            storeTokens(tokens);
        }
    }

    const refreshTokens = async (refreshToken: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${refreshToken}`
                },
            })
            const tokens = await response.json();
            storeTokens(tokens);

            const user = await getCurrentUser();
            userStore.setUser(user);

            return true;
        } catch (error) {
            return false;
        }
    }

    return {
        login,
        refreshTokens
    }

}
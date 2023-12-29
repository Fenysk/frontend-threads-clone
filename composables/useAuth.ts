import { useAuthStore } from '~/stores/authStore';

export const useAuth = () => {

    const config = useRuntimeConfig()
    const API_URL = config.public.API_URL;

    const cookieRefreshToken = useCookie('refreshToken');
    const authStore = useAuthStore();

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

            return true;
        } catch (error) {
            alert(error);
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
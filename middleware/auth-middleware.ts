import { useAuthStore } from '~/stores/authStore';

export default defineNuxtRouteMiddleware(async (from, to) => {
    const authStore = useAuthStore();
    const isLogged = authStore.isAuthenticated;

    if (isLogged)
        return true;

    console.log('There is no access token.');

    const refreshToken = useCookie('refreshToken');

    if (!!refreshToken.value) {
        console.log('There is a refresh token !');
        const { refreshTokens } = useAuth();
        const isRefreshed = await refreshTokens(refreshToken.value);

        if (!!isRefreshed)
            console.log('Redirect to : ', to.path);
            return true;
    }

    console.log('There is no refresh token.');

    console.log('redirect to login');
    return navigateTo('/login');

});

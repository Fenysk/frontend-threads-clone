export const useUtils = () => {

    const cleanUrl = (url: string) => {
        return url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
    }

    return {
        cleanUrl
    }

}
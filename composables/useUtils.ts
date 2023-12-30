export const useUtils = () => {

    const cleanUrl = (url: string) => {
        return url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
    }

    const transformDateToTimeAgo = (date: Date): string => {
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - date.getTime();

        const secondsInMs = 1000;
        const minutesInMs = secondsInMs * 60;
        const hoursInMs = minutesInMs * 60;
        const daysInMs = hoursInMs * 24;
        const weeksInMs = daysInMs * 7; // Add weeks
        const monthsInMs = daysInMs * 30; // Simplification: 30 days in a month
        const yearsInMs = daysInMs * 365; // Simplification: 365 days in a year

        const yearsAgo = Math.floor(timeDifference / yearsInMs);
        const monthsAgo = Math.floor(timeDifference / monthsInMs);
        const weeksAgo = Math.floor(timeDifference / weeksInMs); // Add weeks
        const daysAgo = Math.floor(timeDifference / daysInMs);
        const hoursAgo = Math.floor(timeDifference / hoursInMs);
        const minutesAgo = Math.floor(timeDifference / minutesInMs);
        const secondsAgo = Math.floor(timeDifference / secondsInMs);

        if (yearsAgo > 0) {
            return `${yearsAgo} a`;
        } else if (monthsAgo > 0) {
            return `${monthsAgo} m`;
        } else if (weeksAgo > 0) {
            return `${weeksAgo} sem`;
        } else if (daysAgo > 0) {
            return `${daysAgo} j`;
        } else if (hoursAgo > 0) {
            return `${hoursAgo} h`;
        } else if (minutesAgo > 0) {
            return `${minutesAgo} min`;
        } else {
            return `${secondsAgo} sec`;
        }
    };

    return {
        cleanUrl,
        transformDateToTimeAgo
    }

}
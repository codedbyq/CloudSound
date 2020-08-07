export const formatDate = (date) => {
        const today = new Date();
        const commentDate = new Date(date);
        const diff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(commentDate.getFullYear(), commentDate.getMonth(), commentDate.getDate())) / (1000 * 60 * 60 * 24));

        if (diff >= 365) {
            return `${Math.floor(diff / 365)} years ago`;
        } else if (diff >= 31) {
            return `${Math.floor(diff / 31)} months ago`;
        } else if (diff >= 7) {
            return `${Math.floor(diff / 7)} weeks ago`;
        } else if (diff > 0) {
            return `${diff} days ago`;
        } else {
            return formatTime(today, commentDate);
        }
    }

export const formatTime = (date1, date2) => {
    const diff = date1.getMinutes() - date2.getMinutes();

    if (diff >= 60) {
        return `${Math.floor(diff / 60)} hours ago`;
    } else {
        return `${diff} minutes ago`;
    }
}
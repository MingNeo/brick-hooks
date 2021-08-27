export const setCookie = (name, value, options) => {
    const expires = new Date(Date.now() + options.days * 864e5).toUTCString();
    return new Promise((resolve, reject) => {
        try {
            document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${options.path}`;
            resolve(true);
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    });
};
export const getCookie = (name) => {
    try {
        return (document.cookie || '').split('; ').reduce((prev, curr) => {
            const parts = curr.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : prev;
        }, '');
    }
    catch (err) {
        console.log(err);
        return '';
    }
};
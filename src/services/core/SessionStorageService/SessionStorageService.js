class SessionStorageService {
    static set = (key, value) => {
        if (typeof value === "object") value = JSON.stringify(value);
        window.sessionStorage.setItem(key, value);
    }

    static get = (key) => {
        let value = window.sessionStorage.getItem(key);
        try {
            value = JSON.parse(value);
        } catch (error) { }

        return value;
    }

    static clear = () => {
        window.sessionStorage.clear();
    }

}

export default SessionStorageService;
class UtilService {

    static getApiUrl = (url, hostname) => {
        if (!hostname)
            hostname = window.location.hostname;
        if (url.charAt(0) !== '/')
            url = '/' + url;

        return 'https://api-' + hostname + url;
    }

    static getRegexForUrl = function (base) {
        var reg = new RegExp(".+" + base.replace(/\//g, "\\/") + ".*", 'i');
        return reg;
    }

    static updateHref = function (href) {
        window.location.href = href;
    }
}

export default UtilService;
import SessionStorageService from './SessionStorageService';

describe('SessionStorageService', () => {
    let item = "";
    let mockJsonData = {
        "hello": "world"
    };
    let mockStringData = "hello";

    beforeEach(() => {
        window.sessionStorage = {
            setItem: (key, value) => { item = value; },
            getItem: (key) => { return item; },
            clear: () => { item = undefined },
        };

        jest.spyOn(window.sessionStorage, 'setItem');
        jest.spyOn(window.sessionStorage, 'getItem');
        jest.spyOn(window.sessionStorage, 'clear');

    });

    it('should have set and get method defined', () => {
        expect(SessionStorageService.set).toBeDefined();
        expect(SessionStorageService.get).toBeDefined();
    });

    it('should be able to set JSON data in sessionstorage', () => {
        SessionStorageService.set("key", mockJsonData);
        expect(window.sessionStorage.setItem).toHaveBeenCalledWith("key", JSON.stringify(mockJsonData));
    });

    it('should be able to set string data in sessionstorage', () => {
        SessionStorageService.set("key", mockStringData);
        expect(window.sessionStorage.setItem).toHaveBeenCalledWith("key", mockStringData);
    });

    it('should be able to get JSON data from sessionstorage', () => {
        item = mockJsonData;
        let value = SessionStorageService.get("key");
        expect(window.sessionStorage.getItem).toHaveBeenCalledWith("key");
        expect(value).toEqual(mockJsonData);
    });

    it('should be able to get string data from sessionstorage', () => {
        item = mockStringData;
        let value = SessionStorageService.get("key");
        expect(window.sessionStorage.getItem).toHaveBeenCalledWith("key");
        expect(value).toEqual(mockStringData);
    });

    it('should be able to clear data from sessionstorage', () => {
        item = mockJsonData;
        SessionStorageService.clear();
        let value = SessionStorageService.get("key");
        expect(window.sessionStorage.clear).toHaveBeenCalled();
        expect(value).not.toBeDefined();
    });


})
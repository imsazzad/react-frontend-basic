import LocalStorageService from './LocalStorageService';

describe('LocalStorageService', () => {
    let item = "";
    let mockJsonData = {
        "hello": "world"
    };
    let mockStringData = "hello";

    beforeEach(() => {
        window.localStorage = {
            setItem: (key, value) => { item = value; },
            getItem: (key) => { return item; },
            clear: () => { item = undefined },
        };

        jest.spyOn(window.localStorage, 'setItem');
        jest.spyOn(window.localStorage, 'getItem');
        jest.spyOn(window.localStorage, 'clear');

    });

    it('should have set and get method defined', () => {
        expect(LocalStorageService.set).toBeDefined();
        expect(LocalStorageService.get).toBeDefined();
    });

    it('should be able to set JSON data in localStorage', () => {
        LocalStorageService.set("key", mockJsonData);
        expect(window.localStorage.setItem).toHaveBeenCalledWith("key", JSON.stringify(mockJsonData));
    });

    it('should be able to set string data in localStorage', () => {
        LocalStorageService.set("key", mockStringData);
        expect(window.localStorage.setItem).toHaveBeenCalledWith("key", mockStringData);
    });

    it('should be able to get JSON data from localStorage', () => {
        item = mockJsonData;
        let value = LocalStorageService.get("key");
        expect(window.localStorage.getItem).toHaveBeenCalledWith("key");
        expect(value).toEqual(mockJsonData);
    });

    it('should be able to get string data from localStorage', () => {
        item = mockStringData;
        let value = LocalStorageService.get("key");
        expect(window.localStorage.getItem).toHaveBeenCalledWith("key");
        expect(value).toEqual(mockStringData);
    });

    it('should be able to clear data from localStorage', () => {
        item = mockJsonData;
        LocalStorageService.clear();
        let value = LocalStorageService.get("key");
        expect(window.localStorage.clear).toHaveBeenCalled();
        expect(value).not.toBeDefined();
    });


})
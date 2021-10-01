import HttpService from './HttpService';
import AppConfig from '../../../configs/AppConfig';

const mockResponse = { 'hello': 'world' };

jest.mock('axios', () => {
    return {
        interceptors: {
            request: {
                use: () => { }
            },
            response: {
                use: () => { }
            }
        },
        get: function (url, config) {
            return new Promise(() => {
                return mockResponse;
            }, () => { });
        },
        post: function (url, data, config) {
            return new Promise(() => {
                return mockResponse;
            }, () => { });
        }
    };
});

describe('HttpService', () => {
    it('should have GET and POST method defined', () => {
        expect(HttpService.get).toBeDefined();
        expect(HttpService.post).toBeDefined();
    });

    it('should respond if GET is called with a URL', () => {
        HttpService.get(AppConfig.api.seasons).then((response) => {
            console.log(response);
            expect(response).toBe(mockResponse);
        });
    });

    it('should respond if POST is called with a URL and data', () => {
        HttpService.post(AppConfig.api.seasons, {}).then((response) => {
            expect(response).toBe(mockResponse);
        });
    });

    it('should respond with error if POST is called with no data', () => {
        expect(() => {
            HttpService.post(AppConfig.api.seasons);
        }).toThrowError("Error: Post data not provided for " + AppConfig.api.seasons);
    });
})
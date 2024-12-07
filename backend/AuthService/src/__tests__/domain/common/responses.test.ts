import {RefreshResponse, LoginResponse, VerifyResponse} from '../../../domain/common/responses';

describe('Response Interfaces', () => {
    it('should create a valid RefreshResponse object', () => {
        const refreshResponse: RefreshResponse = {
            access_token: 'someAccessToken',
            refresh_token: 'someRefreshToken'
        };

        expect(refreshResponse).toHaveProperty('access_token', 'someAccessToken');
        expect(refreshResponse).toHaveProperty('refresh_token', 'someRefreshToken');
    });

    it('should create a valid LoginResponse object', () => {
        const loginResponse: LoginResponse = {
            access_token: 'someAccessToken',
            refresh_token: 'someRefreshToken'
        };

        expect(loginResponse).toHaveProperty('access_token', 'someAccessToken');
        expect(loginResponse).toHaveProperty('refresh_token', 'someRefreshToken');
    });

    it('should create a valid VerifyResponse object', () => {
        const verifyResponse: VerifyResponse = {
            access_token: 'someAccessToken',
            role_id: 1
        };

        expect(verifyResponse).toHaveProperty('access_token', 'someAccessToken');
        expect(verifyResponse).toHaveProperty('role_id', 1);
    });
});

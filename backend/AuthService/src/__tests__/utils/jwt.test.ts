import { generateAccessToken, generateRefreshToken, verifyToken } from '../../utils/jwt';
import { User } from '../../domain/common/user';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken');

describe('JWT tests', () => {
    const user: User = {
        id: 123,
        role_id: 1,
        name: 'testuser',
        email: 'testuser@example.com',
        childhouse_id: 0,
        surname: '',
        password_hash: '',
        last_login: new Date(),
        activated: false
    };
    const secret = 'testsecret';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // generateAccessToken
    it('should generate an access token', () => {
        const token = 'accessToken';
        (jwt.sign as jest.Mock).mockReturnValue(token);

        const result = generateAccessToken(user, secret);

        expect(jwt.sign).toHaveBeenCalledWith(
            { id: user.id, role: user.role_id, username: user.name, email: user.email },
            secret,
            { expiresIn: '60m' }
        );
        expect(result).toBe(token);
    });

    // generateRefreshToken
    it('should generate a refresh token', () => {
        const token = 'refreshToken';
        (jwt.sign as jest.Mock).mockReturnValue(token);

        const result = generateRefreshToken(user, secret);

        expect(jwt.sign).toHaveBeenCalledWith(
            { id: user.id, role: user.role_id, username: user.name, email: user.email },
            secret,
            { expiresIn: '3d' }
        );
        expect(result).toBe(token);
    });

    // verifyToken
    it('should verify a token', () => {
        const token = 'validToken';
        const decoded = { id: user.id, role: user.role_id, username: user.name, email: user.email };
        (jwt.verify as jest.Mock).mockReturnValue(decoded);

        const result = verifyToken(token, secret);

        expect(jwt.verify).toHaveBeenCalledWith(token, secret);
        expect(result).toBe(decoded);
    });

    it('should throw an error for an invalid token', () => {
        const token = 'invalidToken';
        (jwt.verify as jest.Mock).mockImplementation(() => {
            throw new Error('Invalid token');
        });

        expect(() => verifyToken(token, secret)).toThrow('Invalid token');
    });
});
// src/utils/passwordHash.ts
import crypto from 'crypto';
import passwordHash from '../../utils/passwordHash';

// src/utils/passwordHash.ts

describe('passwordHash', () => {
    it('should hash the password correctly with given secret', () => {
        const password = 'myPassword';
        const secret = 'mySecret';
        const expectedHash = crypto.createHmac('sha256', secret)
            .update(password)
            .digest('hex');
        
        const result = passwordHash(password, secret);
        expect(result).toBe(expectedHash);
    });

    it('should return different hashes for different passwords with the same secret', () => {
        const secret = 'mySecret';
        const password1 = 'password1';
        const password2 = 'password2';

        const hash1 = passwordHash(password1, secret);
        const hash2 = passwordHash(password2, secret);

        expect(hash1).not.toBe(hash2);
    });

    it('should return different hashes for the same password with different secrets', () => {
        const password = 'myPassword';
        const secret1 = 'secret1';
        const secret2 = 'secret2';

        const hash1 = passwordHash(password, secret1);
        const hash2 = passwordHash(password, secret2);

        expect(hash1).not.toBe(hash2);
    });

    it('should return the same hash for the same password and secret', () => {
        const password = 'myPassword';
        const secret = 'mySecret';

        const hash1 = passwordHash(password, secret);
        const hash2 = passwordHash(password, secret);

        expect(hash1).toBe(hash2);
    });
});


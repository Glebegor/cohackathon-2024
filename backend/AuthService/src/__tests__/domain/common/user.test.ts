import { User } from '../../../domain/common/user';

// user tests
describe('User', () => {
    it('should return a user object', () => {
        const user: User = {
            id: 123,
            role_id: 1,
            name: 'testuser',
            email: 'email@gmail.com;',
            childhouse_id: 0,
            surname: '',
            password_hash: '',
            last_login: new Date(),
            activated: false
        };
    });
});

// user profile tests
describe('UserProfile', () => {
    it('should return a user profile object', () => {
        const user: User = {
            id: 123,
            role_id: 1,
            name: 'testuser',
            email: 'email@gmail.com;',
            childhouse_id: 0,
            surname: '',
            password_hash: '',
            last_login: new Date(),
            activated: false
        };
        const userProfile = {
            user: user,
            description: 'description',
            interests: ['interest1', 'interest2'],
            note: 'note',
            profile_picture: 'picture',
            back_story: 'story'
        };
    })
});

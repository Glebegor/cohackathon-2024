

interface User {
    id: number;
    childhouse_id: number;
    name: string;
    surname: string;
    email: string;
    password_hash: string;
    last_login: Date;
}

interface UserProfile {
    user: User;
    description: string;
    interests: string[];
    note: string;
    profile_picture: string;
    back_story: string;
}

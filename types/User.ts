interface User {
    id: number;
    childhouse_id: number;
    name: string;
    surname: string;
    email: string;
    password_hash: string;
    last_login: Date;
    activated: boolean;
}

interface UserProfile {
    user: User;
    description: string;
    interests: string[];
    note: string;
    profile_picture: string;
    back_story: string;
}

interface ChildHouse {
    id: number;
    admin_id: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;    
}
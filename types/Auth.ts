


interface LoginRequest {
    email: string;
    password_hash: string;
}

interface RegisterRequest {
    childhouse_id: number;
    name: string;
    surname: string;
    email: string;
    password_hash: string;
    last_login: Date;
    activated: boolean;
    description: string | undefined;
    interests: string[] | undefined;
    note: string | undefined;
    profile_picture: string;
    back_story: string;
    access_token: string;
}

interface VerifyRequest {
    access_token: string;
}

interface RefreshRequest {
    refresh_token: string;
}
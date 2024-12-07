
interface RefreshResponse {
    access_token: string;
    refresh_token: string;
}

interface LoginResponse {
    access_token: string;
    refresh_token: string;
}

interface VerifyResponse {
    access_token: string;
    role_id: number;
}


export { RefreshResponse, LoginResponse, VerifyResponse };
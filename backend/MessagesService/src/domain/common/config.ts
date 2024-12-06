
type Config = {
    server: {
        port: number;
        host: string;
        secret: string | undefined;
    }
    db: {
        postgres: {
            user: string;
            host: string;
            database: string;
            password: string | undefined;
            port: number;
        }
        mongo: {
            user: string;
            host: string;
            password: string | undefined;
            database: string;
            port: number;
        }
    }
    services: {
        authServicePort: number;
        userServicePort: number;
        messagesServicePort: number;
    }
}

export default Config;
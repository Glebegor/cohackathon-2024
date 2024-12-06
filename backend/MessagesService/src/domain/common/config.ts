
type Config = {
    server: {
        port: number;
        host: string;
    }
    db: {
        postgres: {
            user: string;
            host: string;
            database: string;
            password: string;
            port: number;
        }
        mongo: {
            user: string;
            host: string;
            password: string;
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
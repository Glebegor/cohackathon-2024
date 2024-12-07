import path from "path/posix"



interface Config 
{   
    type: string,
    server: {
        port: number,
        host: string,
    },
    db: {
        postgres: {
            user: string,
            host: string,
            database: string,
            port: number,
            password: string
        }, 
        mongo: {
            user: string,
            host: string,
            database: string,
            port: number,
            password: string
        },
        redis: {
            name: string,
            host: string,
            port: number,
            password: string
        },
        rabbitmq: {
            host: string,
            port: number
        }
    },
    services: {
        messagesServicePort: number,
        userServicePort: number,
        supportServicePort: number
    }
}

function newConfig(): Config {
    var config = require("../../src/config/config.json");
    config.db.postgres.password = process.env.DB_POSTGRES_PASSWORD;
    config.db.mongo.password = process.env.DB_MONGO_PASSWORD;
    config.db.redis.password = process.env.DB_REDIS_PASSWORD;

    config.server.secret = process.env.SERVER_SECRET;
    return config;
}

export { Config, newConfig };
import Config from "../domain/common/config";
import { resolve } from 'path';
import * as dotenv from 'dotenv';

function getEnv(envType: string) {
    const envPath = resolve(__dirname, `../../.env`);

    dotenv.config({ path: envPath });
}

function newConfig(envType: string): Config {
    getEnv(envType);
    
    var path = (resolve(__dirname, `../../src/config/config.json`));
    var config = require(path);
    
    config.db.mongo.password = process.env.DB_MONGO_PASSWORD;
    config.db.postgres.password = process.env.DB_POSTGRES_PASSWORD;
    config.server.secret = process.env.SERVER_SECRET;

    return config;
}

export default newConfig;
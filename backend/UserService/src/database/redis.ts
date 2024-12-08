import { connect } from "http2";
import { createClient } from "redis";
import { Config, newConfig } from "../config/config";

const config: Config = newConfig();
const client = createClient({
    url: `redis://${config.db.redis.host}:${config.db.redis.port}`
});

client.on("error", (error) => {
    console.error(error);
});

var connectedRedisClient = client.connect();
export default connectedRedisClient;
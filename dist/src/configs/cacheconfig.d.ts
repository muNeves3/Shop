import { RedisOptions } from "ioredis";
interface ICacheConfig {
    driver: "redis";
    config: {
        redis: RedisOptions;
    };
}
declare const _default: ICacheConfig;
export default _default;

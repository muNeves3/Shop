import ICacheProvider from './ICacheProvider';
export default class RedisCachProvider implements ICacheProvider {
    private client;
    constructor();
    save(key: string, value: any): Promise<void>;
    invalidate(key: string): Promise<void>;
    recover<T>(key: string): Promise<T | null>;
    invalidatePrefix(prefix: string): Promise<void>;
}

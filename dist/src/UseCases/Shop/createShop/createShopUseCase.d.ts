interface IShopItem {
    itemId: string;
    shopId: string;
    quantity: number;
}
interface ICreateShopRequest {
    clientId: string;
    shopItemsReq: IShopItem[];
}
declare class CreateShopUseCase {
    execute({ clientId, shopItemsReq }: ICreateShopRequest): Promise<{
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): import(".prisma/client").ShopItem;
        push(...items: import(".prisma/client").ShopItem[]): number;
        concat(...items: ConcatArray<import(".prisma/client").ShopItem>[]): import(".prisma/client").ShopItem[];
        concat(...items: (import(".prisma/client").ShopItem | ConcatArray<import(".prisma/client").ShopItem>)[]): import(".prisma/client").ShopItem[];
        join(separator?: string): string;
        reverse(): import(".prisma/client").ShopItem[];
        shift(): import(".prisma/client").ShopItem;
        slice(start?: number, end?: number): import(".prisma/client").ShopItem[];
        sort(compareFn?: (a: import(".prisma/client").ShopItem, b: import(".prisma/client").ShopItem) => number): import(".prisma/client").ShopItem[];
        splice(start: number, deleteCount?: number): import(".prisma/client").ShopItem[];
        splice(start: number, deleteCount: number, ...items: import(".prisma/client").ShopItem[]): import(".prisma/client").ShopItem[];
        unshift(...items: import(".prisma/client").ShopItem[]): number;
        indexOf(searchElement: import(".prisma/client").ShopItem, fromIndex?: number): number;
        lastIndexOf(searchElement: import(".prisma/client").ShopItem, fromIndex?: number): number;
        every<S extends import(".prisma/client").ShopItem>(predicate: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => U, thisArg?: any): U[];
        filter<S_1 extends import(".prisma/client").ShopItem>(predicate: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => unknown, thisArg?: any): import(".prisma/client").ShopItem[];
        reduce(callbackfn: (previousValue: import(".prisma/client").ShopItem, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => import(".prisma/client").ShopItem): import(".prisma/client").ShopItem;
        reduce(callbackfn: (previousValue: import(".prisma/client").ShopItem, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => import(".prisma/client").ShopItem, initialValue: import(".prisma/client").ShopItem): import(".prisma/client").ShopItem;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: import(".prisma/client").ShopItem, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => import(".prisma/client").ShopItem): import(".prisma/client").ShopItem;
        reduceRight(callbackfn: (previousValue: import(".prisma/client").ShopItem, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => import(".prisma/client").ShopItem, initialValue: import(".prisma/client").ShopItem): import(".prisma/client").ShopItem;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: import(".prisma/client").ShopItem, currentIndex: number, array: import(".prisma/client").ShopItem[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends import(".prisma/client").ShopItem>(predicate: (this: void, value: import(".prisma/client").ShopItem, index: number, obj: import(".prisma/client").ShopItem[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: import(".prisma/client").ShopItem, index: number, obj: import(".prisma/client").ShopItem[]) => unknown, thisArg?: any): import(".prisma/client").ShopItem;
        findIndex(predicate: (value: import(".prisma/client").ShopItem, index: number, obj: import(".prisma/client").ShopItem[]) => unknown, thisArg?: any): number;
        fill(value: import(".prisma/client").ShopItem, start?: number, end?: number): import(".prisma/client").ShopItem[];
        copyWithin(target: number, start: number, end?: number): import(".prisma/client").ShopItem[];
        entries(): IterableIterator<[number, import(".prisma/client").ShopItem]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<import(".prisma/client").ShopItem>;
        includes(searchElement: import(".prisma/client").ShopItem, fromIndex?: number): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: import(".prisma/client").ShopItem, index: number, array: import(".prisma/client").ShopItem[]) => U_3 | readonly U_3[], thisArg?: This): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<import(".prisma/client").ShopItem>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        at(index: number): import(".prisma/client").ShopItem;
        id: string;
        number: number;
        created_at: Date;
        clientId: string;
    }>;
}
export { CreateShopUseCase };

import { Observable } from 'rxjs';
declare type NativeTypes = 'number' | 'string' | 'boolean' | 'symbol' | 'null' | 'undefined' | 'object' | 'function' | 'bigint';
export declare function ofType<T>(type: NativeTypes): (source: Observable<T>) => Observable<T>;
export {};

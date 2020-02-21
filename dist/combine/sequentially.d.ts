import { Observable } from 'rxjs';
declare type ObservableBuilder<T> = (arg: T) => Observable<T>;
export declare function sequentially<T extends any>(...sources: ObservableBuilder<T>[]): Observable<T>;
export {};

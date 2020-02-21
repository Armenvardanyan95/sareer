import { Observable } from 'rxjs';
declare type Constructor<ClassInstance = any> = new () => ClassInstance;
export declare function ofInstance<T>(classType: Constructor<T>): (source: Observable<T>) => Observable<T>;
export {};

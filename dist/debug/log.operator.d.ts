import { Observable } from 'rxjs';
export declare function log<T>(specialNotice?: string): (source: Observable<T>) => Observable<T>;

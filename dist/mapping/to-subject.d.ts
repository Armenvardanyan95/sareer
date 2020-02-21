import { Observable, Subject } from 'rxjs';
export declare function toSubject<T>(source: Observable<T>): Subject<T>;

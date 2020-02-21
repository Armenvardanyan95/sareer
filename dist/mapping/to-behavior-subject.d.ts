import { Observable, BehaviorSubject } from 'rxjs';
export declare function toBehaviorSubject<T extends any>(source: Observable<T>, initial: T): BehaviorSubject<T>;

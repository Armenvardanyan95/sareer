import { Observable, BehaviorSubject } from 'rxjs';


export function toBehaviorSubject<T extends any>(source: Observable<T>, initial: T): BehaviorSubject<T> {
    const subject = new BehaviorSubject<T>(initial);
    source.subscribe(subject);
    return subject;
}
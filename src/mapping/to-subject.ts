import { Observable, Subject } from 'rxjs';


export function toSubject<T>(source: Observable<T>): Subject<T> {
    const subject = new Subject<T>();
    source.subscribe(subject);
    return subject;
}
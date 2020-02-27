import { of, Subject, Observable } from 'rxjs';
import { filter, withLatestFrom, map } from 'rxjs/operators';

type Predicate<T> = (arg: T) => boolean;
const identity = (e: boolean) => e;

export function checkLatestFrom<T extends boolean, S>(inner: Observable<T>, predicate: Predicate<T> = identity) {
    return function(source: Observable<S>): Observable<S> {
        return source.pipe(
            withLatestFrom(inner),
            filter(([_, innerValue]) => predicate(innerValue)),
            map(([sourceValue]) => sourceValue),
        );
    }
}
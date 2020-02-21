import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export function truthy<T>() {
    return function(source: Observable<T>): Observable<T> {
        return source.pipe(filter(item => !!item));
    }
}

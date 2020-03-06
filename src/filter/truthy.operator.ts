import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Filters truthy values:
 * 
 *  of(1, 0, null, 2, undefined, 0, 3)
 *      .pipe(truthy())
 *      .subscribe(console.log);
 * 
 * Will log `1, 2, 3`
*/
export function truthy<T>() {
    return function(source: Observable<T>): Observable<T> {
        return source.pipe(filter(item => !!item));
    }
}

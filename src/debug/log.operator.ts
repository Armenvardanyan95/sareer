import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** 
 * Logs to console on every emission. 
 * Can receive an optional string argument which will also be logged (to differentiate between logged data). 
 */
export function log<T>(specialNotice?: string): (source: Observable<T>) => Observable<T> {
    return function(source: Observable<T>): Observable<T> {
        return source.pipe(tap(item => console.log(`Logging item: ${item} ${specialNotice ? specialNotice : ''}`)))
    }
}

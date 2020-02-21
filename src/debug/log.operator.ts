import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function log<T>(specialNotice?: string) {
    return function(source: Observable<T>): Observable<T> {
        return source.pipe(tap(item => console.log(`Logging item: ${item} ${specialNotice ? specialNotice : ''}`)))
    }
}

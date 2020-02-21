import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

type NativeTypes = 'number' | 'string'| 'boolean' | 'symbol' | 'null' | 'undefined' | 'object' | 'function' | 'bigint';

export function ofType<T>(type: NativeTypes) {
    return function(source: Observable<T>): Observable<T> {
        return source.pipe(filter(item => {
            if (typeof item === 'object' && type === 'object' && item === null) {
                return false;
            }
            if (type === 'null' && item === null) {
                return true;
            }
            return typeof item === type;
        }))
    }
}
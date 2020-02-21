import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

type ObservableBuilder<T> = (arg: T) => Observable<T>;

export function sequentially<T extends any>(...sources: ObservableBuilder<T>[]): Observable<T> {
    return sources.reduce((result, source) => result.pipe(switchMap(e => source(e))), of<any>(null)); 
}

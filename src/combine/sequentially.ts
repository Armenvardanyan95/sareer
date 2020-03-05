import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * Function that receives input of type T and return an Observable<T>
*/
type ObservableBuilder<T> = (arg: T) => Observable<T>;

/** 
 * Sequentially calls functions that return Observables, and pass the result to other Observables. 
 * Same as Promise chaining, uses switchMap
 */
export function sequentially<T extends any>(...sources: ObservableBuilder<T>[]): Observable<T> {
    return sources.reduce((result, source) => result.pipe(switchMap(e => source(e))), of<any>(null)); 
}

import { of, Subject, Observable } from 'rxjs';
import { filter, withLatestFrom, map } from 'rxjs/operators';

/**
 * A predicate function to determine the checking
*/
type Predicate<T> = (arg: T) => boolean;
const identity = (e: boolean) => e;

/**
 * Uses another stream's latest emission to determine whether to proceed with the source
 * For example, in NGRX, proceed with an Effect when the user is logged in:
 * 
 *      class Effects {
 *      
 *       loadData$ = createEffect(() => this.actions.pipe(
 *               ofType(myAction),
 *               checkLatestFrom(this.store.select(state => state.user.isAuth)),
 *               // will proceed only when the user is signed in
 *       ));
 *       
 *       constructor(
 *           private readonly actions$: Actions,
 *           private readonly store: Store<AppState>,
 *       ) {}
 *      }
*/
export function checkLatestFrom<T extends boolean, S>(inner: Observable<T>, predicate: Predicate<T> = identity) {
    return function(source: Observable<S>): Observable<S> {
        return source.pipe(
            withLatestFrom(inner),
            filter(([_, innerValue]) => predicate(innerValue)),
            map(([sourceValue]) => sourceValue),
        );
    }
}
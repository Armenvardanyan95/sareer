import { Subject, Observable } from 'rxjs';

/**
 * Uses a MutationObserver under the hood the track mutations on a given HTMLElement.
 * Returns an Observable of all the MutationRecords
*/
export function fromMutations(el: HTMLElement, options: MutationObserverInit): Observable<MutationRecord[]> {
    const mutations$ = new Subject<MutationRecord[]>();
    const mutationsObserver = new MutationObserver(mutations => mutations$.next(mutations));
    mutationsObserver.observe(el, options);
    return mutations$.asObservable();
}

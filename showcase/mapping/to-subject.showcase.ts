import { interval } from 'rxjs';

import { toSubject } from '../../src/mapping/to-subject';

const seconds$ = interval(1000);

const secondsSubject$ = toSubject(seconds$);

secondsSubject$.subscribe(console.log);

setTimeout(() => secondsSubject$.next(17800), 6000)
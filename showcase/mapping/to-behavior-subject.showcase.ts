import { interval } from 'rxjs';

import { toBehaviorSubject } from '../../src/mapping/to-behavior-subject';

const seconds$ = interval(1000);

const secondsBehaviorSubject$ = toBehaviorSubject(seconds$, 14);

secondsBehaviorSubject$.subscribe(console.log);

setTimeout(() => console.log(secondsBehaviorSubject$.getValue(), 'other'), 6000);
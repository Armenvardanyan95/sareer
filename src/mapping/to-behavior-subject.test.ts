import { of, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

import { toBehaviorSubject } from './to-behavior-subject';

test('toBehaviorSubject should convert simple observable to BehaviorSubject', () => {
    const behaviorSubject$ = toBehaviorSubject(of(1), 1);
    expect(behaviorSubject$ instanceof BehaviorSubject);
    behaviorSubject$.pipe(first()).subscribe(e => expect(e).toBe(1));
    behaviorSubject$.pipe(first()).subscribe(e => expect(e).toBe(4));
    behaviorSubject$.next(4);
    expect(behaviorSubject$.getValue()).toBe(4);
});
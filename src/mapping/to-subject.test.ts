import { of, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { toSubject } from './to-subject';

test('toSubject should convert simple observable to Subject', () => {
    const subject$ = toSubject(of(1));
    expect(subject$ instanceof Subject);
    subject$.pipe(first()).subscribe(e => expect(e).toBe(1));
    subject$.pipe(first()).subscribe(e => expect(e).toBe(4));
    subject$.next(4);
});
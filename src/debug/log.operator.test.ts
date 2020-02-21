import { log } from './log.operator';
import { tap } from 'rxjs/operators';

test('log operator should return a tap', () => {
    expect(log()).toEqual(tap(e => console.log()))
});
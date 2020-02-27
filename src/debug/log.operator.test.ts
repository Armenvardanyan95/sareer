import { of } from 'rxjs';

import { log } from './log.operator';

test('log operator should return a tap', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    of(1).pipe(log()).subscribe(() => {
        expect(consoleLogSpy).toHaveBeenCalledWith('Logging item: 1 ');
    })
});
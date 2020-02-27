import { of } from 'rxjs';

import { truthy } from './truthy.operator';

test('truthy operator should filter the truthy values', () => {
    const emptyFn = {empty: () => {}};
    const empty = jest.spyOn(emptyFn, 'empty');

    of(1, undefined, null, '').pipe(truthy()).subscribe(emptyFn.empty);
    expect(empty).toHaveBeenCalledTimes(1);
});
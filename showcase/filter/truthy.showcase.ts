import { of } from 'rxjs';

import { truthy } from '../../src/filter/truthy.operator'

of(1, 2, 3, null, '', [], 5).pipe(truthy()).subscribe(console.log);

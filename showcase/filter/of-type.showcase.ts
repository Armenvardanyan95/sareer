import { of } from 'rxjs';

import { ofType } from '../../src/filter/of-type.operator';

of(1,2,3,4, null, undefined, 'hello').pipe(ofType('null')).subscribe(console.log);
of(1,2,3,4, null, undefined, 'hello').pipe(ofType('number')).subscribe(console.log);
of(1,2,3,4, null, undefined, 'hello', function() {}).pipe(ofType('function')).subscribe(console.log);
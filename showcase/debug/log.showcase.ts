import { of } from 'rxjs';

import { log } from '../../src/debug/log.operator';


of(1, 2, 3).pipe(log()).subscribe();

of(1, 2, 3).pipe(log('lower')).subscribe();
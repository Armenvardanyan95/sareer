import { of } from 'rxjs';

import { ofInstance } from '../../src/filter/of-instance.operator';

class A {
    methodOfA() {}
}

class B {
    methodOfB() {}
}


of(new A(), new B(), new B()).pipe(ofInstance(A)).subscribe(console.log);
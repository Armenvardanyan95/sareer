# Sareer
An RxJS library to make your streams easier

## Installation
Sareer is available as an NPM package. 
You can install it inside any application that utilizes RxJS.

> $ npm install sareer

## Usage
You should keep in mind that `sareer` only makes sense for RxJS, so RxJS naturally is a dependency.

Some API-s exported from the package are functions that help create/modify existing streams, for example, the `toSubject` function:

    import { interval } from 'rxjs';

    import { toSubject } from 'sareer';

    const seconds$ = interval(1000);

    const secondsSubject$ = toSubject(seconds$);

    secondsSubject$.subscribe(console.log);

    setTimeout(() => secondsSubject$.next(17800), 6000);

The following code will log 0, 1, 2, 3, 4, 17800, 5, etc..., essentially turning a simple stream into a RxJS `Subject`.

Other API-s are RxJS operators that can be used inside existing streams. For example, the `ofInstance` operator will filter stream emission to be of instance of a certain provided class:

    import { of } from 'rxjs';

    import { ofInstance } from 'sareer';

    class A {
        methodOfA() {}
    }

    class B {
        methodOfB() {}
    }


    of(new A(), new B(), new B()).pipe(ofInstance(A)).subscribe(console.log);

## Further Reading

Of course, this is not the entire API of this library. If you are on our github page, please visit our [website](sareer.io) to read the entire API.
If your are already on our website, please scroll down for the API reference.

## Contributing

This project is maintained by [Armen Vardanyan](armenvardanyan95.github.io), but I would love to see more people from the community getting engaged. If you want to make a contribution, honestly the biggest thing you can do is creating a contribution guide. But any other contributions like new operators/functions, bug fixes, opened issues and new feature suggestions would be very welcome!

## License
Licensed under the MIT license.
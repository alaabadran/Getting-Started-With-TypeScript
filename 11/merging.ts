interface Box {
    height: number;
    width: number;
    recycle(): void;
}

interface Box {
    depth: number;
    recycle(tearDown: boolean): void;
}

module Foo {
    var foo = "hello module merging";
    export function bar() {
        return foo;
    }
}

module Foo {
    export function baz() {
        //return foo; // error!
    }
}

function sayHello(name: string) {
    return sayHello.prefix + name;
}

module sayHello {
    export var prefix = "Hello, ";
}

sayHello("John Doe"); // Hello, John Doe
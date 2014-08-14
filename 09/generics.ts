function foo<T>(a: T) {
    return a;
}

var bar = foo<string>("hello world");
var bar2 = foo<number>(10);
var bar3 = foo<HTMLElement>(document.createElement("div"));

var baz = new Array<string>();

var json = '{"firstName":"John","lastName":"Doe"}';

interface Person {
    firstName: string;
    lastName: string;
}

interface Person2 {
    firstName: string;
    lastName: string;
}

var myJSON = {
    parse: function <T>(data: string) : T {
        return JSON.parse(data);
    }
};

var obj = myJSON.parse<Person>(json);

class Foo<T extends Person> {
    foo: T;

    bar(data: T) {

    }

    baz(): T {
        return this.foo;
    }
}

var obj2 = new Foo<Person2>();
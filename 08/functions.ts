function sum(a: number, b: number) {
    return a + b;
}

var sum2 = function (a: number, b: number) {
    return a + b;
};

var sum3 = (a: number, b: number) => {
    return a + b;
};

var sum4 = (a: number, b: number) => a + b;

function sayHello(firstName: string, lastName?: string) {
    var greeting = "Hello " + firstName;

    if (lastName) {
        greeting += " " + lastName;
    }

    return greeting;
}

sayHello("John");
sayHello("John", "Doe");

function sayHello2(firstName: string, lastName = "") {
    return "Hello " + firstName + " " + lastName;
}

sayHello2("John");
sayHello2("John", "Doe");

function sum5(a: number, b: number, ...c: number[]) {
    var total = a + b;

    c.forEach((value) => {
        total += value;
    });

    return total;
}

var total = sum5(1, 2, 3, 4, 5); // 15

function foo(a: number, b: number): number;
function foo(a: string, b: string): string;
function foo(a, b): any {
    if (typeof a == "string" && typeof b == "string") {
        return a + " " + b;
    }

    return a + b;
}

var a = foo(1, 2);
var b = foo("john", "doe");

class Foo {
    foo(a: number, b: number): number;
    foo(a: string, b: string): string;
    foo(a, b): any {
        if (typeof a == "string" && typeof b == "string") {
            return a + " " + b;
        }

        return a + b;
    }

}

var foo2 = new Foo();

foo2.foo(1, 2);
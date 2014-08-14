class Walker {
    name: string;
    walk() {
        return this.name + " is walking.";
    }
}

class Speaker {
    name: string;
    speak() {
        return this.name + " is speaking.";
    }
}

class Person implements Walker, Speaker {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    walk: () => string;
    speak: () => string;
}

function mix(derivedType: any, ...baseTypes: any[]) {
    baseTypes.forEach(baseType => {
        Object.getOwnPropertyNames(baseType.prototype).forEach(name => {
            derivedType.prototype[name] = baseType.prototype[name];
        });
    })
}

mix(Person, Walker, Speaker);

var person = new Person("John Doe");

alert(person.speak());
alert(person.walk());
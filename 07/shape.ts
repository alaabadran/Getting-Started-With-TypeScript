interface Shape {
    computeArea: () => number;
}

class Polygon implements Shape {
    height: number;

    computeArea() {
        return 0;
    }
}

class Elipse implements Shape {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    computeArea() {
        return Math.PI * this.a * this.b;
    }
}

var elipse = new Elipse(4, 4);

function doSomethingWithShape(shape: Shape) {
    alert(shape.computeArea());
}

doSomethingWithShape(elipse);


HTMLElement
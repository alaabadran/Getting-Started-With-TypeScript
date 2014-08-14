import shapes = require("shapes");
export class Ellipse implements shapes.Shape {
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

export class Circle extends Ellipse {
    radius: number;

    constructor(radius: number) {
        super(radius, radius);
        this.radius = radius;
    }
}

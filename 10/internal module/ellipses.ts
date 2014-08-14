/// <reference path="shapes.ts" />
module Shapes {
    export class Ellipse implements Shape {
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
} 
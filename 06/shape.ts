class Polygon {
    height: number;

    constructor(height: number) {
        this.height = height;
    }

    computeArea(): number {
        return 0;
    }
}

class Triangle extends Polygon {
    base: number;

    constructor(height: number, base: number) {
        super(height);
        this.base = base;
    }

    computeArea() {
        return .5 * this.base * this.height;
    }
}

class Rectangle extends Polygon {
    width: number;

    constructor(height: number, width: number) {
        super(height);
        this.width = width;
    }

    computeArea() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(length: number) {
        super(length, length);
    }
}
class Point {
    static origin = new Point(0, 0);
    static add(p1: Point, p2: Point) {
        return p1.add(p2);
    }

    constructor(private xValue: number,
        private yValue: number) {
    }

    get x() {
        return this.xValue;
    }

    //set x(value: number) {
    //    this.xValue = value;
    //}

    get y() {
        return this.yValue;
    }

    add(point: Point) {
        return new Point(point.x + this.x, point.y + this.y);
    }

}

class ThreeDPoint extends Point {
    constructor(xValue: number, yValue: number, private zValue: number) {
        super(xValue, yValue);
    }

    get z() {
        return this.zValue;
    }

    add(point: ThreeDPoint) {
        return new ThreeDPoint(point.x + this.x, point.y + this.y, point.z + this.z);
    }
}

var p1 = new ThreeDPoint(1, 2, 3);s
var p2 = new ThreeDPoint(3, 2, 1);

var p3 = p1.add(p2);
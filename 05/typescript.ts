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

var p1 = new Point(2, 1);
var p2 = new Point(5, 2);
var p3 = Point.add(p1, p2);
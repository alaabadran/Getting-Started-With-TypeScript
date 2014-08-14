interface Point {
    x: number;
    y: number;
}

interface ThreeDPoint extends Point {
    z: number;
}

var point1 = {
    x: 2,
    y: 1
};

var point2 = {
    x: 3,
    y: 32
};

var threeDPoint = {
    x: 20,
    y: 11,
    z: 50
};

function addPoints(
    p1: Point,
    p2: Point) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
    };
}

addPoints(point1, point2);
addPoints(point1, threeDPoint);
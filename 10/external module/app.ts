import polygons = require("polygons");
import ellipses = require("ellipses");

var triangle = new polygons.Triangle(4, 4);
var square = new polygons.Square(4);
var circle = new ellipses.Circle(4);

alert(triangle.base);
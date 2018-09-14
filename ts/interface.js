var PointX = /** @class */ (function () {
    function PointX() {
    }
    PointX.prototype.drawPoint = function (point) {
        console.log("Point X " + this.x);
        console.log("Point Y " + this.y);
    };
    return PointX;
}());
var point = new PointX();
point.x = 2;
point.y = 3;
point.drawPoint(point);

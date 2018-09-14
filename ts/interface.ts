interface Point {
    x : number;
    y : number;
    drawPoint(point :Point) : void;
}

class PointX {
    x:number;
    y:number;
    constructor() {}
    
    drawPoint(point: Point) {
        console.log("Point X " + this.x);
        console.log("Point Y " + this.y);
    }
}

let point: PointX = new PointX();
point.x = 2;
point.y = 3;
point.drawPoint(point);
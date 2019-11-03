// Using interface is formal way.

//interface Point {
//  x: number;
//  y: number;
//}

class Grid {
    // static property : what is used by class
    // => class field that uses in class
    static origin = {
        x: 0,
        y: 0
    };
    //calculateDistanceFromOrigin(point: Point) {
    calculateDistanceFromOrigin(point: {x: number; y: number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) {}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 40, y: 50}));
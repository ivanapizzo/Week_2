

class Point {

    private x: number;
    private y: number;

    constructor(x:number, y:number) {

        this.x = x; // longitud
        this.y = y; // latitud 
    }

    getX():number{

        return this.x;
    }

    getY():number{

        return this.y;
    }
    
    setX():number{

        this.x = this.x;

        return this.x;
    }

    setY():number{

        this.y = this.y;

        return this.y;
    }

    toString(x:number, y:number) {

        (x + y).toString();

        return "Longitud y latitud";
    }

    distanceToIOrigin():number {

        let lon1 = this.x;
        let lat1 = this.y;

        let firstPoint = (lon1 - 0);
        let secondPoint = (lat1 - 0);

        let distanceO = Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);

        return distanceO;
    }

    calculateDistance(anotherPoint:Point):number {

    
        let firstPoint = this.x - anotherPoint.x;
        let secondPoint = this.y - anotherPoint.y;
        
        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    }
}


export {Point}






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
    
    setX(x:number):number{

        this.x = x;

        return x;
    }

    setY(y:number):number{

        this.y = this.y;

        return y;

    }

    toString(): string{


        return `Longitud: ${this.x} y Latitud: ${this.y}`;
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

    calcularQuadrant():number {

        let cuadrante;

        for (let i = 0; i <= 4; i ++){

            if(this.x == 0 || this.y == 0){

                return 0;
            } else if (this.x > 0 && this.y > 0) {
    
                return 1;
    
            } else if (this.x < 0 && this.y > 0){
    
                return 2;
    
            } else if (this.x < 0 && this.y < 0) {
    
                return 3;
    
            } else if (this.x > 0 && this.y < 0){
    
                return 4;
            }

        } 
        return cuadrante;
    }   


    calculateNearest(Points:Point[]) {

        let arrPoint:Point[] = [];

        //for (i = 0; i < Points.length; i++)


        
    }

}

export {Point}




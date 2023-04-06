

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

        // Coordenada al origen (0,0)
        let lon2 = 0;
        let lat2 = 0;

        let firstPoint = (lon1 -lon2);
        let secondPoint = (lat1 - lat2);

        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    }

    calculateDistance(anotherPoint:Point):number {

        let lon1 = this.x;
        let lat1 = this.y;

        let lon2 = 0;
        let lat2 = 0;

        let firstPoint = (lon1 -lon2);
        let secondPoint = (lat1 - lat2);
        
        return Math.sqrt(firstPoint * firstPoint + secondPoint * secondPoint);
    }
}


 // let distancia: number = 0;
        // distancia = Math.sqrt(distancia);

        // distancia = [((lon2 - lon1)).Math.sqrt()] + ((lat2 - lat1).Math.pow());
        // return firstPoint - secondPoint; 


        // D² = (X₂-X₁)² + (Y₂-Y₁)²

// function distancia(p1,p2) {
//     const x = p1.x - p2.x
//     const y = p1.y - p2.y
  
//     return Math.sqrt(x * x + y * y)
//   }
  
//   distancia(p1, p2)


export {Point}




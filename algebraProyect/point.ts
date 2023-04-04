

export class Point {

    private x: number;
    private y: number;

    constructor(x:number, y:number) {

        this.x = x;
        this.y = y;
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

        return "x + y";
    }
}




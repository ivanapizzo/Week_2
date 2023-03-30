export class Person {

    name: string;
    age: number;
    private address: string;

    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;

    }


    printName(){

        return this.name;
    }

    
    yearOfBirth(currentYear:number){

        return currentYear - this.age;
    }

    setAddress(address:string){

        return address;
    }

    getAdress(): string {


        return this.address;
    }
}





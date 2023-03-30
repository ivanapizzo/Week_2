
//import { title } from "./book";
import { Book } from "./book";

export class Library {
    
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books:Book[], address:string, manager:string){

        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    getAddress():string{

        return this.address;

    }

    setAddress(address:string){

        this.address = this.address;
    }

    getManager():string{

        return this.manager;

    }

    setManager(manager:string){

        this.manager = this.manager;
    }

    toString(){

        for (let i = 0; i < this.books.length; i++){

            let books1 = this.books[i];
            console.log("Book" + [i+1] + "\n" + "Title - "+ books1.getTitle() + "\n" + "Number of Pages - " + books1.getnPages() + "\n" + "ISBN - " + books1.getIsbn() + "\n" + "Author - " + books1.getAuthor() + "\n" + "Editorial - " + books1.getEditorial() + "\n");
        }
    
    }

    getNumbersOfBooks():number{

        return this.books.length;

    }

    findByAuthor(author:string):Book[]{

        let arrayAuthor:Book[] = [];

        for (let i = 0; i < this.books.length; i++){

            if(this.books[i].getAuthor() == author){

                arrayAuthor.push(this.books[i]);
            }
        }

        return arrayAuthor;
    }
}




//let arrayBooks = [book1, book2, book3];

// console.log(arrayBooks);
// console.log(arrayBooks.toString());
// console.log(books.getNumbersOfBooks());
// console.log(arrayBooks.findByAuthor("Rafael Echeverría"));



import { title } from "process";

export class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;


    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;

    }

    toString(){


        return "Title - " + this.title + "\n" + "Number of pages -" + this.nPages + "\n" + "Isbn -" + this.isbn + "\n" + "Author -" + this.author + "\n" + "Editorial -" + this.editorial;

    }

    getTitle(){

        return this.title;
    }

    setTitle(){

        this.title = title;
    }

    getnPages(){

        return this.nPages;
    }

    setnPages(){

        this.nPages = this.nPages;
    }

    getIsbn(){

        return this.isbn;
    }

    setIsbn(){

        this.isbn = this.isbn;
    }

    getAuthor(){

        return this.author;
    }

    setAuthor(){

        this.author = this.author;
    }

    getEditorial(){

        return this.editorial;
    }

    setEditorial(){

        this.editorial = this.editorial;
    }
}


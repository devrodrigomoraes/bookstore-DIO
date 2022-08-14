import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/book";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";

export const books: Book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()

export class BookService
{
    private url = "http://localhost:44382/api/bookstore";

    httpOptions = {
        headers: new HttpHeaders({'Content-type': 'aplication/json'})
    }



    constructor(private http: HttpClient){}

    getBooks() {
        return this.http.get(this.url)
    }
}
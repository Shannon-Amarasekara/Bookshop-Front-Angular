import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Basket } from '../../models/basket/basket';
import { BookId } from '../../models/book/book-id/bookid';
import { Book } from '../../models/book/book';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  private baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
   }

  public getBasket(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/viewBasket`);
  }

  public addBookToBasket(id: BookId): void{
    
  }

}

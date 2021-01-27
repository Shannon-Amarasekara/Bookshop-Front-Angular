import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Basket } from '../../models/basket/basket';
import { BookId } from '../../models/book/book-id/bookid';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  private baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
   }

  public getBasket(): Observable<Basket>{
    return this.http.get<Basket>(`${this.baseUrl}/viewBasket`);
  }

  public addBookToBasket(id: BookId): Observable<BookId> {
   return this.http.get<BookId>(`${this.baseUrl}/addBookToBasket/${id.value}`);
  }

  public removeBookFromBasket(id: BookId): Observable<BookId> {
    return this.http.get<BookId>(`${this.baseUrl}/removeBookFromBasket/${id.value}`);
  }

}

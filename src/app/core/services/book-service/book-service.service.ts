import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book/book';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../../models/book/genre/genre';
import { BookId } from '../../models/book/book-id/bookid';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
  }

 public findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  public findByGenre(genre: Genre): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books/genre/${genre}`)
  }

  public findFiveRandomBestsellers(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books/fiveRandomBestsellers`)
  }

  public findBookById(bookId: BookId): Observable<Book>{
    return this.http.get<Book>(`${this.baseUrl}/books/${bookId.value}`)
  }

}
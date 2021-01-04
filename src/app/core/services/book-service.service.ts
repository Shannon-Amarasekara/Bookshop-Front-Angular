import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book/book';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/book/genre/genre';

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

 public findByTerm(term: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books/${term}`);
  }

  public findByGenre(genre: Genre): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books/genre/${genre}`)
  }

  public findFiveRandomBestsellers(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/books/fiveRandomBestsellers`)
  }

}
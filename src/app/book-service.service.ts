import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../app/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/books';
  }

  public findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }

}

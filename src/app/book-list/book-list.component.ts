import { Component, OnInit } from '@angular/core';
import { BookService } from '../core/services/book-service.service';
import { Book } from '../core/models/book';
import { Genre } from '../core/models/genre';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  searchValue: string;
  genres: Array<Genre>;
  genreSearch: Genre;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.genres = Object.values(Genre);
    this.findAll();
  }

  public findByTerm(search: string): void {
    this.bookService.findByTerm(search).subscribe(books => {
      this.books = books;
    })
  }

  public findAll(): void {
    this.bookService.findAll().subscribe(books => {
      this.books = books;
    })
  }

  public findByGenre(): void {
    this.bookService.findByGenre(this.genreSearch).subscribe(books => {
      this.books = books;
    })
  }
}
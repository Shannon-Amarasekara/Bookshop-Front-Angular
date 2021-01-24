import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book-service/book-service.service';
import { Book } from '../../core/models/book/book';
import { Genre } from '../../core/models/book/genre/genre';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Book[];
  searchValue: string;
  genres: Array<Genre>;
  genreSearch: Genre;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.genres = Object.values(Genre);
    this.findAll();
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
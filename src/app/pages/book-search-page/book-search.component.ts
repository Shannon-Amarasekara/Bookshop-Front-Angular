import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book-service/book-service.service';
import { Book } from '../../core/models/book/book';
import { Genre } from '../../core/models/book/genre/genre';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  genre: Genre;
  books: Book[];

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    var genreString = this.route.snapshot.paramMap.get('genre');
    this.genre = Genre [genreString]; 
    this.findByGenre(this.genre);
  }

  public findAll(): void {
    this.bookService.findAll().subscribe(books => {
      this.books = books;
    })
  }

  public findByGenre(genre: Genre): void {
    this.bookService.findByGenre(this.genre).subscribe(books => {
      this.books = books;
    })
  }

}
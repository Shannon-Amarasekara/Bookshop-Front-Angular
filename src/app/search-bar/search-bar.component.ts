import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../core/models/book/book';
import { Genre } from '../core/models/book/genre/genre';
import { BookService } from '../core/services/book-service/book-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  books: Book[];
  genres: Array<Genre>;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.genres = Object.values(Genre);
    console.log(this.genres);
  }

  public findByGenre(genre: Genre): void {
    console.log(genre);
  }

}

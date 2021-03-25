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
  genreFilter: Genre = null;
  search: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.genres = Object.values(Genre);
  }

  public findByGenre(genre: Genre): void {
    this.genreFilter = genre;
    this.router.navigateByUrl(`/books/genre/${this.genreFilter}`);

    if(window.location.href.indexOf('home') > -1 == false){
      window.location.replace(`/books/genre/${this.genreFilter}`)
    }

  }

}

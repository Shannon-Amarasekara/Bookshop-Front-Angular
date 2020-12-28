import { Component, OnInit } from '@angular/core';
import { BookService } from '../core/services/book-service.service';
import { Book } from '../core/models/book';

@Component({
  selector: 'app-search-navigation',
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.css']
})
export class SearchNavigationComponent implements OnInit {

  searchValue: string;
  fiveRandomBestsellers: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.findFiveRandomBestsellers();
  }

  public findFiveRandomBestsellers(): void {
    this.bookService.findFiveRandomBestsellers().subscribe(books =>
      this.fiveRandomBestsellers = books)
  }
}

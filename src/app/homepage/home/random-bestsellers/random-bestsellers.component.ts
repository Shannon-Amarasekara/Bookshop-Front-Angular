import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookService } from 'src/app/core/services/book-service.service';

@Component({
  selector: 'app-random-bestsellers',
  templateUrl: './random-bestsellers.component.html',
  styleUrls: ['./random-bestsellers.component.css']
})
export class RandomBestsellersComponent implements OnInit {

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

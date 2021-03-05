import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book/book';
import { BookService } from 'src/app/core/services/book-service/book-service.service';
import { BookId } from 'src/app/core/models/book/book-id/bookid';

@Component({
  selector: 'app-random-bestsellers',
  templateUrl: './random-bestsellers.component.html',
  styleUrls: ['./random-bestsellers.component.css']
})
export class RandomBestsellersComponent implements OnInit {

  fiveRandomBestsellers: Book[];
  bookId: BookId;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.findFiveRandomBestsellers();
}

  public findFiveRandomBestsellers(): void {
    this.bookService.findFiveRandomBestsellers().subscribe(books => {
      this.fiveRandomBestsellers = books;
    })
  }
}

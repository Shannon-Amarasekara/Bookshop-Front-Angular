import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book/book';
import { BookService } from 'src/app/core/services/book-service/book-service.service';
import { BasketService } from 'src/app/core/services/basket-service/basket.service';
import { BookId } from 'src/app/core/models/book/book-id/bookid';

@Component({
  selector: 'app-random-bestsellers',
  templateUrl: './random-bestsellers.component.html',
  styleUrls: ['./random-bestsellers.component.css']
})
export class RandomBestsellersComponent implements OnInit {

  fiveRandomBestsellers: Book[];
  bookId: BookId;

  constructor(private bookService: BookService, private basketService: BasketService, private router: Router) { }

  ngOnInit(): void {
    this.findFiveRandomBestsellers();
}

  public findFiveRandomBestsellers(): void {
    this.bookService.findFiveRandomBestsellers().subscribe(books => {
      this.fiveRandomBestsellers = books;
    })


  }

  public addToBasket(id: BookId): void {
    this.basketService.addBookToBasket(id).subscribe( id => {
      this.bookId = id;
    })
  }

  public viewBook(id: BookId): void {
    this.router.navigateByUrl(`/books/${id.value}`);
  }

}

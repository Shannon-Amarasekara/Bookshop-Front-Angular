import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket-service/basket.service';
import { Basket } from 'src/app/core/models/basket/basket';
import { BookId } from 'src/app/core/models/book/book-id/bookid';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket;
  bookId: BookId;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBasket();
  }

  public getBasket(): void {
    this.basketService.getBasket().subscribe(basket => {
      this.basket = basket;
    })
  }

  public removeBook(bookid: BookId): void {
    this.basketService.removeBookFromBasket(bookid).subscribe(bookid => {
      this.bookId = bookid;
    })
    this.getBasket();
  }

}

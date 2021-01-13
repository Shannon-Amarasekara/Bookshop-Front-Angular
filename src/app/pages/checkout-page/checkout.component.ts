import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket-service/basket.service';
// import { Basket } from 'src/app/core/models/basket/basket';
import { Book } from 'src/app/core/models/book/book';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // basket: Basket;
  books: Book[];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.basketService.getBasket().subscribe(books => {
      this.books = books;
    })
  }

}

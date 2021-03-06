import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket-service/basket.service';
import { Basket } from 'src/app/core/models/basket/basket';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  basket: Basket;
  
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBasket();
  }

  public getBasket(): void {
    this.basketService.getBasket().subscribe(basket => {
      this.basket = basket;
    })
  }

}

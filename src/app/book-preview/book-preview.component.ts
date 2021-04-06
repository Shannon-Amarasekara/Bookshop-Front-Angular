import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../core/models/book/book';
import { BookId } from '../core/models/book/book-id/bookid';
import { BasketService } from '../core/services/basket-service/basket.service';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  @Input() book: Book;
  bookId: BookId;

  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit(): void {
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

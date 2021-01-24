import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/models/book/book';
import { BookId } from 'src/app/core/models/book/book-id/bookid';
import { BasketService } from 'src/app/core/services/basket-service/basket.service';
import { BookService } from 'src/app/core/services/book-service/book-service.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book: Book;
  bookId: BookId;

  constructor(private route: ActivatedRoute, private bookService: BookService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBook();
  }

  public getBook(): void{
    const id = this.route.snapshot.paramMap.get('id');
    const idValue: number =+id;   

    let bookId = new BookId(idValue);
    console.log(bookId.value);

    this.bookService.findBookById(bookId).subscribe(book => this.book = book);
  }

  public addToBasket(id: BookId): void {
    this.basketService.addBookToBasket(id).subscribe( id => {
      this.bookId = id;
    })
  }

}

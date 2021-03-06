import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookSearchComponent } from './pages/book-search-page/book-search.component';
import { BookService } from './core/services/book-service/book-service.service';
import { HomeComponent } from './pages/home-page/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CreatorComponent } from './pages/creator-page/creator.component';
import { FooterComponent } from './footer/footer.component';
import { MasterheadComponent } from './pages/creator-page/masterhead/masterhead.component';
import { CvComponent } from './pages/creator-page/cv/cv.component';
import { RandomBestsellersComponent } from './pages/home-page/home/random-bestsellers/random-bestsellers.component';
import { CheckoutComponent } from './pages/checkout-page/checkout.component';
import { BasketService } from './core/services/basket-service/basket.service';
import { BasketComponent } from './pages/checkout-page/basket/basket.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    HomeComponent,
    MenuComponent,
    CreatorComponent,
    FooterComponent,
    MasterheadComponent,
    CvComponent,
    RandomBestsellersComponent,
    CheckoutComponent,
    BasketComponent,
    BookPageComponent,
    BookPreviewComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [BookService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

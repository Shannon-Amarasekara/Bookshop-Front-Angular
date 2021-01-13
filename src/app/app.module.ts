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
import { LoginComponent } from './pages/login-page/login.component';
import { LogoutComponent } from './pages/logout-page/logout.component';
import { CreatorComponent } from './pages/creator-page/creator.component';
import { FooterComponent } from './footer/footer.component';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';
import { MasterheadComponent } from './pages/creator-page/masterhead/masterhead.component';
import { CvComponent } from './pages/creator-page/cv/cv.component';
import { RandomBestsellersComponent } from './pages/home-page/home/random-bestsellers/random-bestsellers.component';
import { CheckoutComponent } from './pages/checkout-page/checkout.component';
import { BasketService } from './core/services/basket-service/basket.service';
import { AuthenticationService } from './core/services/authentication-service/authentication-service.service';


@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    CreatorComponent,
    FooterComponent,
    SearchNavigationComponent,
    MasterheadComponent,
    CvComponent,
    RandomBestsellersComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService, BasketService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookService } from './core/services/book-service.service';
import { HomeComponent } from './homepage/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';
import { MasterheadComponent } from './welcome/masterhead/masterhead.component';
import { CvComponent } from './welcome/cv/cv.component';
import { RandomBestsellersComponent } from './homepage/home/random-bestsellers/random-bestsellers.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    WelcomeComponent,
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
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { CreatorComponent } from './pages/creator-page/creator.component';
import { CheckoutComponent } from './pages/checkout-page/checkout.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { BookSearchComponent } from './pages/book-search-page/book-search.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'creator', pathMatch: 'full'},
  { path: 'creator', component: CreatorComponent},
  { path: 'home', component: HomeComponent },
  { path: 'books/genre/:genre', component: BookSearchComponent},
  { path: 'basket', component: CheckoutComponent},
  { path: 'books/:id', component: BookPageComponent},
  { path: 'login', component: AuthenticationPageComponent},
  { path: 'sign-up', component: AuthenticationPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

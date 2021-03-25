import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { CreatorComponent } from './pages/creator-page/creator.component';
import { CheckoutComponent } from './pages/checkout-page/checkout.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { BookSearchComponent } from './pages/book-search-page/book-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'creator', pathMatch: 'full'},
  { path: 'creator', component: CreatorComponent},
  { path: 'home', component: HomeComponent },
  { path: 'books/genre/:genre', component: BookSearchComponent},
  { path: 'basket', component: CheckoutComponent},
  { path: 'books/:id', component: BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

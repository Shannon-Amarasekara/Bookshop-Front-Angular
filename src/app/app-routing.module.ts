import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './pages/book-search-page/book-search.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { RouteGuardService } from './core/services/route-guard-service/route-guard.service';
import { LoginComponent } from './pages/login-page/login.component';
import { LogoutComponent } from './pages/logout-page/logout.component';
import { CreatorComponent } from './pages/creator-page/creator.component';
import { CheckoutComponent } from './pages/checkout-page/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'creator', pathMatch: 'full'},
  { path: 'creator', component: CreatorComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookSearchComponent },
  { path: 'basket', component: CheckoutComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

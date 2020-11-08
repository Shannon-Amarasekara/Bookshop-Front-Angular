import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onCreatorPage(): boolean {
    if (window.location.href.indexOf('welcome') > -1) {
      console.log('your are on creator page');
      return true;
    } else {
      return false;
    }
  }

}

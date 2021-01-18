import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCreatorPage(): boolean {
    if (window.location.href.indexOf('creator') > -1) {
      return true;
    } else {
      return false;
    }
  }

}
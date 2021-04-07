import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  private username: string;
  private password: string;

  constructor() { }

  ngOnInit(): void {
  }

  public login(){
    console.log("login");
  }

}

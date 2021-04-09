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

  public onLoginPage(): boolean {
    if (window.location.href == "http://localhost:4200/login") {
      return true;
    }
    return false;
  }

  public onSignUpPage(): boolean {
    if (window.location.href == "http://localhost:4200/sign-up") {
      return true;
    }
    return false;
  }

  public login() {
    // implement
    console.log("login");
  }

  public signUp(){
    // implement
    console.log("signup");
  }

}

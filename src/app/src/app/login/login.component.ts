import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid credentials'

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.authenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          console.log('You are logged in')
          this.router.navigate(['/home'])
          this.invalidLogin = false
        },

        error => {
          console.log('There has been an error')
          console.log(error)
          this.invalidLogin = true
        }
      )
  }
}

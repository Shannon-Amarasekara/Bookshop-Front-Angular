import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {
    const authenticationHeader = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: authenticationHeader
    })

    return this.http.get<string>(
      `http://localhost:8080/auth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            return data;
          }
        )
      )
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}



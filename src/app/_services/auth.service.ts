import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API = "http://localhost:8081/api/"
const LOGIN = BASE_API + "login"
const LOGOUT = BASE_API + "logout"
const ADS = BASE_API + "annonces"

const httpOptions = { 
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post(
      LOGIN,{
        username,
        password
      },
      httpOptions
    )
  }

  logout(): Observable<any> {
    return this.http.post(LOGOUT, {});
  }

  ads(): Observable<any> {
    return this.http.post(ADS, {});
  }
}

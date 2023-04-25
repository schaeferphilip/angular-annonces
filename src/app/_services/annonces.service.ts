import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const BASE_API = "http://localhost:8081/api/"
const ADS = BASE_API + "annonces"

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  access_token=this.storageService.getToken()
  
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':'Bearer '+this.access_token })
  };
  
  constructor(private http: HttpClient,
    private storageService: StorageService) { }

  getAnnonces(): Observable<any> {
    return this.http.get(ADS , this.httpOptions);
  }

  getAnnonce(id:number): Observable<any> {
    return this.http.get(ADS +id , this.httpOptions);
  }

  putAnnonce(id:number): Observable<any> {
    return this.http.put(ADS +id , this.httpOptions);
  }

  deleteAnnonce(id:number): Observable<any> {
    return this.http.delete(ADS +id , this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from './credit';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'    
  })
};

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {
  
  private serviceName = 'simulator'
  private API_URL = environment.apiUrl +':'+environment.apiPort + '/' +this.serviceName 
  
  constructor(private httpClient: HttpClient) { }

  evaluateCredit(credit: Credit): Observable<Credit> {    
    return this.httpClient.post<Credit>(this.API_URL, credit, httpOptions);    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FundingRequest } from './funding-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor(private httpClient: HttpClient) { }

  getLoan():Observable<FundingRequest[]>{
      return this.httpClient.get<FundingRequest[]>('http://localhost:3000/loan');
    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})
export class AuthServiceComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  login(data):Observable<any>{
    return this.httpClient.post(`http://localhost:3000/users?q=data.userName`,data);
  }
  registerUser(data){
    return this.httpClient.post(`http://localhost:3000/users?q=data.userName`,data);
  }
  loginbyUserName(data):Observable<any>{
    return this.httpClient.get(`http://localhost:3000/users?q=`+data.userName);
  }

  ngOnInit() {
  }

}

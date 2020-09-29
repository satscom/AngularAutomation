import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthServiceComponent } from '../auth-service/auth-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  loginerror=false;
 
  
  constructor(private authService: AuthServiceComponent,private router: Router) { }

  initializeForm() {
    this.formGroup = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
     this.initializeForm();   
  }
 
  submitForm() {
    if (this.formGroup.valid) {
         this.authService.loginbyUserName(this.formGroup.value).subscribe(res => 
          {
            if (res.length > 0) {
              this.router.navigateByUrl("/loan");
            }
            else{
              this.loginerror =true;
            }
            });
    }
  
  }
 
  goToRegister() {
      this.router.navigateByUrl("/register");
  }

}

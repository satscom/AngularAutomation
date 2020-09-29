import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthServiceComponent } from '../auth-service/auth-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthServiceComponent, private router: Router) { }

  ngOnInit() {

    this.initializeRegisterForm();
  }

  initializeRegisterForm(){

    this.formGroup = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }

  submitForm(){
    
   if (this.formGroup.valid) {   
       this.authService.registerUser(this.formGroup.value).subscribe(res=>{
         console.log("user created successfully")
         this.router.navigateByUrl("/loan");
        })
   }

  }
  clearForm() {
    this.formGroup.reset();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatTableModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AuthServiceComponent } from './auth-service/auth-service.component';
import { LoanComponent } from './loan/loan.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    AuthServiceComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [AuthServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

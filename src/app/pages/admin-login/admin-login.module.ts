import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from "@angular/router";
import { AdminLogin } from './admin-login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoveryComponent } from './recovery/recovery.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLogin),
    ReactiveFormsModule

  ]
})
export class AdminLoginModule { }

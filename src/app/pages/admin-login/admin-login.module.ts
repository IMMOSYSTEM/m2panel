import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from "@angular/router";
import { AdminLogin } from './admin-login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoveryComponent } from './recovery/recovery.component';
import { PhoneMaskDirective } from './phone-mask';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    PhoneMaskDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLogin),
    ReactiveFormsModule

  ],
   exports: [
    PhoneMaskDirective
  ],
})
export class AdminLoginModule { }

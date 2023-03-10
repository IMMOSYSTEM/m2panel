import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from "@angular/router";
import {  AccountRoutes } from "./account-routing";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    ProgressbarModule.forRoot(),

  ]
})
export class AccountModule { }

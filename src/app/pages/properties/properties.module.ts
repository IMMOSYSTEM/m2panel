import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import  {PropertiesRoutes} from './properties.routing';
import {  RouterModule } from "@angular/router";
import { FormPropertiesComponent } from './form-properties/form-properties.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    PropertiesComponent,
    FormPropertiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PropertiesRoutes),
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class PropertiesModule { }

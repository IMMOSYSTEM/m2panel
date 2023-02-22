import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import  {PropertiesRoutes} from './properties.routing';
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PropertiesRoutes),

  ]
})
export class PropertiesModule { }

import  { Routes } from "@angular/router";
import { PropertiesComponent } from './properties/properties.component';

export const PropertiesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "properties",
        component: PropertiesComponent
      }
    ]
  },
  
  
];

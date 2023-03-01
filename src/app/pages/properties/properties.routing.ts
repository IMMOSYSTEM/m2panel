import  { Routes } from "@angular/router";
import  { PropertiesComponent } from './properties/properties.component';
import { FormPropertiesComponent } from './form-properties/form-properties.component';
export const PropertiesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "properties",
        component: PropertiesComponent
      },
      {
        path: "add-properties",
        component: FormPropertiesComponent
      }
    ]
  },
  
  
];

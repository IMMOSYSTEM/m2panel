import  { Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

export const AccountRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  },
  
  
];
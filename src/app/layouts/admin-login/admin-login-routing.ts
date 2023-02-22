import { Routes } from "@angular/router";

import { LoginComponent } from "src/app/pages/admin-login/login/login.component";
import { RegisterComponent } from "src/app/pages/admin-login/register/register.component";


export const AdmindLoginRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  }
];

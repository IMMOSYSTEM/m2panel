import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from "./recovery/recovery.component";

export const AdminLogin: Routes = [
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
  },
  {
    path:"",
    children:[{
      path:"recovery",
      component:  RecoveryComponent
    }
      
    ]
  }
  
];

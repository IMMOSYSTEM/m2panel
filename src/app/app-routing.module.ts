import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { LoginLayoutComponent } from "./layouts/login-layout/login-layout.component";
import { AdminPanelComponent } from "./layouts/admin-panel/admin-panel.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule)

      },
      {
        path: "examples",
        loadChildren: () => import('./pages/examples/examples.module').then(m => m.ExamplesModule)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import('./pages/admin-login/admin-login.module').then(m => m.AdminLoginModule)
      }
    ]
  }, 
  {
    path: "",
    component: AdminPanelComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: "inventory",
        loadChildren: () => import('./pages/properties/properties.module').then(m => m.PropertiesModule)
      },
      {
        path: "account",
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

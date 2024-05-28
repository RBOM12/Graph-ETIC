import { Routes } from '@angular/router';

import {DashboardPage1Component} from "./pages/dashboard1/dashboard-page1.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardPage2Component} from "./pages/dashboard2/dashboard-page2.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard1', component: DashboardPage1Component},
  { path: 'dashboard2', component: DashboardPage2Component},
];

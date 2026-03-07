import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [

  { path: '', component: Login },
  { path: 'register', component: Register },
  { path: 'menu', component: Menu }

];
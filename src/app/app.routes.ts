import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Menu  } from './pages/menu/menu';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

{ path: '', component: Login },

{ path: 'register', component: Register },

{ 
  path: 'menu',
  component: Menu,
  canActivate: [authGuard]
}

];
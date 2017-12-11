import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimePunchComponent } from './time-punch/time-punch.component';
// full : makes sure the path is absolute path
const MAINMENU_ROUTES: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'time-punch', component: TimePunchComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);

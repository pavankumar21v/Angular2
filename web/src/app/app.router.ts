import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    { path: '',     component: LoginComponent},
    { path: 'home', component: HomeComponent}
 ]
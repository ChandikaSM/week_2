import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

export const routes: Routes = [
    { path: '**', component: HomePageComponent},
    { path: 'signup', component: SignUpPageComponent }
];

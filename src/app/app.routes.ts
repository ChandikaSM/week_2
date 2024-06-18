import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlacesComponent } from './pages/places/places.component';
import { DetailsComponent } from './pages/details/details.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { PlacesListComponent } from './pages/places/places-list/places-list.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent},
    { path: 'places', component: PlacesComponent},
    { path: 'details', component: DetailsComponent},
    { path: 'booknow', component: BookNowComponent},
    { path: 'placelist', component: PlacesListComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

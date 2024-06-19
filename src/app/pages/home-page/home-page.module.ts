import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


export const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  // declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule],


})
export class HomePageModule {}

// import { Component, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './home-page.component';

// export const routes: Routes = [
//   {path: '', component: HomePageComponent},
// ];

// @NgModule({
//   declarations: [HomePageComponent],
//   imports: [CommonModule, RouterModule.forChild(routes)],
// })
// export class HomePageModule {}
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}
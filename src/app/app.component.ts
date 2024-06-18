import { Component, Injectable } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatToolbarModule}  from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterOutlet } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import {MatDialog} from "@angular/material/dialog";
import { LoginComponent } from './pages/authentication/login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButton,
  MatGridListModule,
MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tourist_spot';
  constructor(private dialog: MatDialog) {}

  openSignupModal(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '700px'
    });
  }
  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    });
  }
  
}

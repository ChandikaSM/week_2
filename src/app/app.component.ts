import { Component, Injectable } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './pages/authentication/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatGridListModule,
    MatIcon,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tourist_spot';
  constructor(private dialog: MatDialog, private router: Router) {}


  fun(): void {
    console.log('true')

    // this.test = 'You are my hero!';
    // this.count++;
    // alert('Test message :'+this.test+' Count :'+this.count);
  }

  // openSignupModal(): void {
  //   console.log('true')
  //   // const dialogRef = this.dialog.open(SignUpComponent, {
  //   //   width: '700px'
  //   // });
  //   this.router.navigate(['/login']);
  // }


  openLoginModal(event: any): void {
    console.log('yes');
    // debugger;
    // console.log('skndjsbfjhb')
    // const dialogRef = this.dialog.open(LoginComponent, {
    //   width: '600px',
    // });
  }

  testBtn(): void {
    console.log('Test')
  }
}

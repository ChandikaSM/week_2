import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private dialog: MatDialog) {}
  openSignupModal(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px'
    });
  }

}

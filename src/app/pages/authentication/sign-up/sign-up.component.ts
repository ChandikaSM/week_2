import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatCard],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Form submitted:', this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });
  }
}

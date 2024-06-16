import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-now',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButton, MatDatepickerModule, MatInputModule, MatFormFieldModule],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss'
})
export class BookNowComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent){
    this.hide.set(!this.hide);
    event.stopPropagation();

  }

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if(this.email.hasError('required')) {
      this.errorMessage.set('You must a value');

    } else if (this.email.hasError('email')){
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

}

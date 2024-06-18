import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';





@Component({
  selector: 'app-book-now',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButton, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatIconModule],
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

  childQuantity: number = 5;
  adultQuantity: number =3;
  pricePerTicket:number = 10;
//  decreaseQuantity(type: 'child' | 'adult')
//  {
//   if(type === 'child'){
//     if(this.childQuantity > 0) {
//       this.childQuantity --;
//     } else if (type === 'adult') {
//       if(this.adultQuantity > 0){
//         this.adultQuantity--;
//       }
//     }
//   }
//  }

//  increaseQuantity(type: 'child' | 'adult'){
//   if(type === 'child'){
//     this.childQuantity++;
//   } else if (type === 'adult') {
//     this.adultQuantity++;
//   }
//  }

 getTotal():number {
  return (this.childQuantity * this.pricePerTicket) + (this.adultQuantity * this.pricePerTicket);
 }

}

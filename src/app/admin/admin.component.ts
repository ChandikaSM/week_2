import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatSidenavModule, MatCard, RouterLink, MatFormField, MatLabel],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle,MatCardContent, MatCardActions, MatButton],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
})
export class PlacesComponent {}

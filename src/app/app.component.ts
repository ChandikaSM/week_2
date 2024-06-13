import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatToolbarModule}  from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterOutlet } from '@angular/router';
import { MatIcon } from "@angular/material/icon";


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
}

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle,MatCardContent, MatCardActions, MatButton],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss',
})
export class PlacesComponent {
  @ViewChild('districtGrid') districtGrid: ElementRef | undefined;
  constructor(private renderer: Renderer2) {}
  moveSepahijalaItems() {
    if(!this.districtGrid){
      return;
    }
    const gridElement = this.districtGrid.nativeElement;
    const cards = gridElement.querySelectorAll('.card');
    
    cards.forEach((card: HTMLElement) => {
      const overlayElement = card.querySelector('.imageOverlay');
      if (overlayElement) {
        const overlayText = overlayElement.textContent?.trim();
        if (overlayText === 'Sepahijala') {
          console.log(card.innerHTML);
        }
      }
    });
  }
}
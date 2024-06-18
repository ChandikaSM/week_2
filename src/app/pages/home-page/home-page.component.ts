import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HomePageService} from "./home-page.service";
import { Interface } from "./interface";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent{
  items: Interface[] = [];
  trackBy(index: number, item: any): number {
    return item.id;
  }
  constructor(private dataService: HomePageService){}
  ngOnInit(): void {
    this.dataService.getData().subscribe((items: Interface[])=>{
      console.log(items);
      this.items = items;

    }, (error) => {
      console.error ('Error Fetching data:', error);
    });
  }

  hasEntryFee(item: Interface): boolean {
    return !!item.entry_fee;
  }

  hasPhotos(item: Interface):boolean {
    return !!item.photos;
  }
}

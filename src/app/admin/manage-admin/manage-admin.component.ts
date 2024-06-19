import { Component } from '@angular/core';
import { ComponentAdminComponent } from '../component-admin/component-admin.component';
import { CategoryService } from '../component-admin/category.service';
import { Router } from 'express';

@Component({
  selector: 'app-manage-admin',
  standalone: true,
  imports: [],
  templateUrl: './manage-admin.component.html',
  styleUrl: './manage-admin.component.scss'
})
export class ManageAdminComponent {
    displayedColumns:string[] = ['name', 'edit'];
    dataSource:any;
    responseMessage: any;
    constructor(private categoryService: CategoryService, 
      private router: Router){


    }
    // ngOnInit():void {
    //   // this.ngxService.start();
    //   this.tableData();
    // }

    // tableDate() {
    //   // this.categoryService.get
    //   console.log('hello');
    // }
}

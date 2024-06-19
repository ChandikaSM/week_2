import {Routes} from "@angular/router";
import { ManageAdminComponent } from "./manage-admin.component";





export const Manage: Routes=[
    {
        path: 'category',
        component: ManageAdminComponent,
        // canActivate:[RouteGuardService],
        

    }
]
import { state } from "@angular/animations";
import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string
}

const MenuList = [
{state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: 'admin'},
{state: 'category', name: 'Manage Places', icon: 'category', role: 'admin'}
];


@Injectable() 
export class MenuItems {
    getMenuItems(): Menu[] {
        return MenuList;
    }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    standalone: true,
    imports: [MatExpansionModule, CommonModule, RouterModule, NgScrollbarModule, RouterModule],
})
export class AppSidebarComponent {
    panelOpenState = false;
    constructor(private router: Router) {
    }
}
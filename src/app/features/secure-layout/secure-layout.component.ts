import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../shared/components/header/header.component';
import { AppSidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MatDrawerMode, MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppFooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-secure-layout',
    standalone: true,
    imports: [RouterOutlet, CommonModule, AppHeaderComponent, AppSidebarComponent, NgScrollbarModule, AppFooterComponent, MatSidenavContainer, MatSidenav, MatSidenavContent],
    templateUrl: './secure-layout.component.html',
})
export class SecureLayoutComponent {

    @ViewChild('sidenav') sidenav!: MatSidenav;

    sidebarMode = (): MatDrawerMode => {
        return 'side';
    }

    isSidebarOpened = (): boolean => {
        return true;
    }

    toggleSidebar = (): void => {
        this.sidenav.toggle();
    }

    closeSidebar() {
        document.body.classList.toggle('open-sidebar');
    }
}

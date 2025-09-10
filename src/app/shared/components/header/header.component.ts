import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren, EventEmitter, Output} from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
import { TsButtonConfig } from 'ts-components/form-controls/button';
import { MatToolbar } from "@angular/material/toolbar";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    standalone: true,
    imports: [MatMenuTrigger, MatTooltipModule, MatButton, CommonModule, MatToolbar, MatMenu],
})
export class AppHeaderComponent {
  @Output() ToggleSidebar: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren(MatMenuTrigger)
  trigger!: QueryList<MatMenuTrigger>;

  tooltipContent = 'Dark Mode';

  toggleSidebar = (): void => {
    this.ToggleSidebar.emit();
    document.body.classList.toggle('open-sidebar');
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
    if (this.tooltipContent === "Dark Mode") {
        this.tooltipContent = "Light Mode";
    }
    else {
      this.tooltipContent = "Dark Mode";
    }
  }

  openMenu(index: number) {
    this.trigger.toArray().forEach((item: MatMenuTrigger, i: number) => {
      if (i !== index && item.menuOpen) {
        item.closeMenu();
      }
    });
  }

  buttonConfig!: TsButtonConfig;

  iconUrlButtonConfig: TsButtonConfig = {
    id: 'iconUrlButtonConfig',
    iconUrl: '../../../../assets/images/notification-icon.svg',
    isPrimary: true,
    callback: () => {
    },
    color: 'primary',
    variant: 'bordered',
    cssClasses: ["icon-btn"]
  }
}
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class AppFooterComponent {

}
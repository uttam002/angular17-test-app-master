import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceCardComponent } from '../../../../shared/components/advance-card/advance-card.component';
import { InfoPanelComponent } from '../info-pannel/info-pannel.component';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';

@Component({
  selector: 'test-forgot-password',
  standalone: true,
  imports: [CommonModule, AdvanceCardComponent, InfoPanelComponent, ForgotFormComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
}

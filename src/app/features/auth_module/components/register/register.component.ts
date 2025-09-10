import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceCardComponent } from '../../../../shared/components/advance-card/advance-card.component';
import { InfoPanelComponent } from '../info-pannel/info-pannel.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'test-register',
  standalone: true,
  imports: [CommonModule, AdvanceCardComponent, InfoPanelComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
}
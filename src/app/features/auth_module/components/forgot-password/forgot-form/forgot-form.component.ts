import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TsInputComponent, TsInputConfig, TsInputType } from 'ts-components/form-controls/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TsButtonConfig, TsButtonComponent } from 'ts-components/form-controls/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-forgot-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TsInputComponent, TsButtonComponent, RouterModule],
  templateUrl: './forgot-form.component.html',
  styleUrl: './forgot-form.component.css'
})
export class ForgotFormComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  textInputEmailConfig: TsInputConfig = {
    id: 'email',
    type: TsInputType.Email,
    formControlName: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    appearance: 'outline',
    customValidationMessage: (errorType: string) => {
      switch (errorType) {
        case 'required': return 'Email is required';
        case 'email': return 'Enter a valid email address';
        default: return 'Invalid email';
      }
    }

  }

  forgotButtonConfig: TsButtonConfig = {
    buttonText: 'Send Reset Link',
    color: 'primary',
    id: '',
    isPrimary: true,
    cssClasses: [
      'w-100',
      'mt-4',
      'py-2',
      'bg-primary',
      'text-white',
      'font-semibold',
      'rounded-lg',
    ],
    variant: 'bordered',
    callback: (element?: any): void => {
      if (this.forgotForm.valid) {
        const email = this.forgotForm.value.email;
        console.log('Password reset requested for:', email);
        // Here you would typically send a reset email
        alert('Password reset link has been sent to your email address!');
        this.forgotForm.reset();
      } else {
        // Mark all fields as touched to show validation errors
        Object.keys(this.forgotForm.controls).forEach(key => {
          this.forgotForm.get(key)?.markAsTouched();
        });
      }
    }
  }
}

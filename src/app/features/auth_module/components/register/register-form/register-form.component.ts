import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TsInputComponent, TsInputConfig, TsInputType } from 'ts-components/form-controls/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TsButtonConfig, TsButtonComponent } from 'ts-components/form-controls/button';
import { AuthService } from '../../../../../shared/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TsInputComponent, TsButtonComponent, RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)]]
    });
  }

  textInputUserNameConfig: TsInputConfig = {
    type: TsInputType.Text,
    formControlName: 'userName',
    label: 'Username'
  }

  textInputEmailConfig: TsInputConfig = {
    type: TsInputType.Email,
    formControlName: 'email',
    label: 'Email'
  }

  textInputPasswordConfig: TsInputConfig = {
    type: TsInputType.Password,
    formControlName: 'password',
    label: 'Password'
  }

  textInputPhoneConfig: TsInputConfig = {
    type: TsInputType.Text,
    formControlName: 'phoneNumber',
    label: 'Phone Number'
  }

  registerButtonConfig: TsButtonConfig = {
    buttonText: 'Register',
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
      if (this.registerForm.valid) {
        const userData = this.registerForm.value;
        this.authService.register(userData);
        console.log('User registered:', userData);
        // Reset form after successful registration
        this.registerForm.reset();
      } else {
        // Mark all fields as touched to show validation errors
        Object.keys(this.registerForm.controls).forEach(key => {
          this.registerForm.get(key)?.markAsTouched();
        });
      }
    }
  }
}

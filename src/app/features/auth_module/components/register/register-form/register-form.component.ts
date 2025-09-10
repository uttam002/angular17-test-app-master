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

  // Username
textInputUserNameConfig: TsInputConfig = {
  id: 'username',
  type: TsInputType.Text,
  formControlName: 'userName',
  label: 'Username',
  placeholder: 'Enter your username',
  appearance: 'outline',
  customValidationMessage: (errorType: string) => {
    switch (errorType) {
      case 'required': return 'Username is required';
      case 'minlength': return 'Must be at least 3 characters long';
      case 'maxlength': return 'Cannot exceed 20 characters';
      default: return 'Invalid username';
    }
  }
}

// Email
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

textInputPasswordConfig: TsInputConfig = {
  id: 'password',
  type: TsInputType.Password,
  formControlName: 'password',
  label: 'Password',
  placeholder: 'Enter a strong password',
  appearance: 'outline',
  customValidationMessage: (errorType: string) => {
    switch (errorType) {
      case 'required': return 'Password is required';
      case 'minlength': return 'Password must be at least 6 characters long';
      default: return 'Invalid password';
    }
  },
  keypress: (event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
      return false; // prevent spaces
    }
    return true;
  }
}

textInputPhoneConfig: TsInputConfig = {
  id: 'phone',
  type: TsInputType.Text,
  formControlName: 'phoneNumber',
  label: 'Phone Number',
  placeholder: '+91 9876543210',
  appearance: 'outline',
  customValidationMessage: (errorType: string) => {
    switch (errorType) {
      case 'pattern': return 'Enter a valid phone number (max 15 digits)';
      default: return 'Invalid phone number';
    }
  }
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

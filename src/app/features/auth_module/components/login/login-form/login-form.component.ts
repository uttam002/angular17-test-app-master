import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TsInputComponent, TsInputConfig, TsInputType } from 'ts-components/form-controls/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TsCheckboxComponent, TsCheckboxConfig } from 'ts-components/form-controls/checkbox';
import { TsButtonConfig, TsButtonComponent } from 'ts-components/form-controls/button';
import { AuthService } from '../../../../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { TogglePassword } from '../../../../../shared/directives/toggle-password.directive';

@Component({
  selector: 'test-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TsInputComponent, TsCheckboxComponent, TsButtonComponent, RouterModule, TogglePassword],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  textInputUserNameConfig: TsInputConfig = {
    id: 'username',
    label: 'User Name',
    formControlName: 'userName',
    type: TsInputType.Text,
    placeholder: 'Enter your username',
    appearance: 'outline',
    autofocus: true,
    customValidationMessage: (errorType: string) => {
      switch (errorType) {
        case 'required': return 'User name is required';
        case 'minlength': return 'User name must be at least 3 characters long';
        case 'maxlength': return 'User name cannot exceed 20 characters';
        default: return 'Invalid input';
      }
    }
  }

  textInputPasswordConfig: TsInputConfig = {
    id: 'password',
    label: 'Password',
    formControlName: 'password',
    type: TsInputType.Password,
    placeholder: 'Enter your password',
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
        return false;
      }
      return true;
    }
  }
  rememberMeCheckboxConfig: TsCheckboxConfig = {
    formControlName: 'rememberMe',
    label: 'Remember Me'
  }
  loginButtonConfig: TsButtonConfig  ={
    buttonText: 'Login',
    color: 'primary',
    id: '',
    isPrimary: true,
    cssClasses: [
      'w-100',
      'mt-2',
      'py-2',
      'bg-primary',
      'text-white',
      'font-semibold',
      'rounded-lg',
    ],
    variant: 'bordered',
    callback: (element?: any): void => {
      if (this.loginForm.valid) {
        const { userName, password } = this.loginForm.value;
        if (this.authService.login(userName, password)) {
          alert('Login successful');
          this.loginForm.reset();
        } else {
          alert('Invalid credentials');
        }
      } else {
        // Mark all fields as touched to show validation errors
        Object.keys(this.loginForm.controls).forEach(key => {
          this.loginForm.get(key)?.markAsTouched();
        });
      }
    }
  }
}

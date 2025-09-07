import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TsInputComponent, TsInputConfig, TsInputType } from 'ts-components/form-controls/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TsCheckboxComponent, TsCheckboxConfig } from 'ts-components/form-controls/checkbox';
import { TsButtonConfig, TsButtonComponent } from 'ts-components/form-controls/button';
import { AuthService } from '../../../../../shared/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TsInputComponent, TsCheckboxComponent, TsButtonComponent, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  textInputUserNameConfig: TsInputConfig = {
    type: TsInputType.Text,
    formControlName: 'userName',
    label: 'UserName'
  }
  textInputPasswordConfig: TsInputConfig = {
    type: TsInputType.Password,
    formControlName: 'password',
    label: 'Password'
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
      'mt-4',
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
          console.log('Login successful');
          // Navigate to dashboard or home page
        } else {
          console.log('Invalid credentials');
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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TsInputComponent, TsInputConfig, TsInputType } from "ts-components/form-controls/input";
import { TsDropDownConfig, TsDropDownFeature, TsDropdownComponent, TsDropdownOptionConfig } from 'ts-components/form-controls/dropdown'
import { TsCheckboxConfig, TsCheckboxComponent } from 'ts-components/form-controls/checkbox';
import { TsButtonComponent, TsButtonConfig } from "ts-components/form-controls/button";

@Component({
  selector: 'test-project-management-header',
  standalone: true,
  imports: [TsInputComponent, ReactiveFormsModule, CommonModule, TsDropdownComponent, TsCheckboxComponent, TsButtonComponent],
  templateUrl: './project-management-header.component.html',
  styleUrl: './project-management-header.component.css'
})
export class ProjectManagementHeaderComponent {
  filterationForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.filterationForm = this.fb.group({
      projectName: [''],
      type: [''],
      technology: [''],
      status: [''],
      projectMode: [''],
      showOnlyCMMI: [false]
    })
  }
  projectTypeOptions: TsDropdownOptionConfig[]=[
    {text: 'Select Type', value: ''},
    {text: 'Fixed Cost', value: 'Fixed Cost'},
    {text: 'Hourly', value: 'Hourly'},
    {text: 'Monthly', value: 'Monthly'}
  ]


  technologyOptions: TsDropdownOptionConfig[]=[
    {text: '.Net', value: 'dotnet'},
    {text: 'Java', value: 'java'},
    {text: 'PHP', value: 'php'}
  ]

  statusOptions: TsDropdownOptionConfig[]=[
    {text: 'Select Status', value: ''},
    {text: 'In Progress', value: 'inProgress'},
    {text: 'Completed', value: 'Completed'},
    {text: 'On Hold', value: 'onHold'},
    {text: 'Dev Completed', value: 'devCompleted'},
    {text: 'Unassigned', value: 'unassigned'}
  ]

  projectModeOptions: TsDropdownOptionConfig[] =[
    {text: 'All', value:'all'},
    {text: 'Active', value:'Active'},
    {text: 'In Active', value:'inActive'}
  ]


  textInputProjectNameConfig: TsInputConfig = {
    id: 'projectName',
    label: 'Name',
    formControlName: 'projectName',
    type: TsInputType.Text,
    appearance: 'outline',
  }
  projectTypeDropdownConfig: TsDropDownConfig = {
    data: this.projectTypeOptions,
    id: 'projectType',
    label: 'Type',
    formControlName: 'type',
    appearance: 'outline',
    placeholder: 'Select Type',
  }
  technologyDropdownFeatures: TsDropDownFeature ={
    allowSearching: true,
    searchPlaceholderLabel: 'Search Technology',
    allowMultiple: true,

  }
  technologyDropdownConfig: TsDropDownConfig = {
    data: this.technologyOptions,
    id: 'projectType',
    label: 'Technology',
    formControlName: 'technology',
    appearance: 'outline',
    placeholder: 'Select Technology',
    features: this.technologyDropdownFeatures
  }
  statusDropdownConfig: TsDropDownConfig = {
    data: this.statusOptions,
    id: 'status',
    label: 'Status',
    formControlName: 'status',
    appearance: 'outline',
    placeholder: 'Select Status',
  }

  projectModeDropdownConfig: TsDropDownConfig = {
    data: this.projectModeOptions,
    id: 'projectMode',
    label: 'Project Mode',
    formControlName: 'projectMode',
    appearance: 'outline',
    placeholder: 'Select Project Mode',
  }

  showOnlyCMMICheckboxConfig: TsCheckboxConfig = {
      formControlName: 'showOnlyCMMI',
      label: 'Show Only CMMI Projects'
    }

  searchButtonConfig: TsButtonConfig  ={
      buttonText: 'Search',
      color: 'primary',
      id: 'projectSearchBtn',
      isPrimary: true,
      cssClasses: [
        'mt-4',
        'text-white',
        'bg-primary',
        'font-semibold'
      ],
      variant: 'bordered',
      callback: (element?: any): void => {
        if (this.filterationForm.valid) {
         console.log(this.filterationForm.value);
        } else {
          // Mark all fields as touched to show validation errors
          Object.keys(this.filterationForm.controls).forEach(key => {
            this.filterationForm.get(key)?.markAsTouched();
          });
        }
      }
    }
    resetButtonConfig: TsButtonConfig  ={
      buttonText: 'Reset',
      color: 'basic',
      id: 'filterResetBtn',
      isPrimary: false,
      cssClasses: [
        'mt-4',
        'custom-border-btn',
        'text-black',
        'bg-seconddary',
        'font-semibold'
      ],
      variant: 'bordered',
      callback: (element?: any): void => {
        this.filterationForm.reset();
      }
    }
}

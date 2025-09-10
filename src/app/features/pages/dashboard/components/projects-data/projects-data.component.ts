import { Component, ViewChild } from '@angular/core';
import { TsDataGrid, TsDataGridColumnConfig, TsDataGridComponent, TsDataGridFieldDataType, TsDataGridFieldType } from 'ts-components/grid';
import { Project } from '../../../../../core/models/Project';

@Component({
  selector: 'test-projects-data',
  standalone: true,
  imports: [TsDataGridComponent],
  templateUrl: './projects-data.component.html',
  styleUrl: './projects-data.component.css'
})
export class ProjectsDataComponent {
  @ViewChild('projectsGrid') dataGrid!: TsDataGridComponent<Project>;

  gridId = 'projects-grid';
  primaryKey: keyof Project = 'id';


  // project data
  projectsData: Project[] = [
    { id: '1', projectName: 'E-Commerce Platform', teamSize: 8, billable: 2, nonBillable: 6 },
    { id: '2', projectName: 'Mobile Banking App', teamSize: 12, billable: 4, nonBillable: 8 },
    { id: '3', projectName: 'Internal Training Portal', teamSize: 4, billable: 2, nonBillable: 2 },
    { id: '4', projectName: 'Customer Dashboard', teamSize: 6, billable: 2, nonBillable: 4 },
    { id: '5', projectName: 'Analytics System', teamSize: 10, billable: 7, nonBillable: 3 }
  ];

  // Grid configuration
  gridFeatures = {
    isRowHoverEnable: true,
    showPagination: false,
    hideHeaderRow: false,
    allowDragAndDropColumn: false,
    toolbar: {
      allowSearching: false,
      allowFooter: false,
    }
  };

// Column configuration
columns: TsDataGridColumnConfig<Project>[] = [
  {
    title: 'Project',
    field: 'projectName',
    fieldDataType: TsDataGridFieldDataType.String,
    fieldType: TsDataGridFieldType.Data,
    isSortable: true
  },
  {
    title: 'Team Size',
    field: 'teamSize',
    fieldDataType: TsDataGridFieldDataType.Number,
    fieldType: TsDataGridFieldType.Data,
    isSortable: true
  },
  {
    title: 'Billable',
    field: 'billable',
    fieldDataType: TsDataGridFieldDataType.Number,
    fieldType: TsDataGridFieldType.Data,
    isSortable: true
  },
  {
    title: 'Non-Billable',
    field: 'nonBillable',
    fieldDataType: TsDataGridFieldDataType.Number,
    fieldType: TsDataGridFieldType.Data,
    isSortable: true
  }
];
  dataGridConfig: TsDataGrid<Project> = {
    id: this.gridId,
    primaryKey: this.primaryKey,
    data: this.projectsData,
    columns: this.columns,
    features: this.gridFeatures
  };

  viewAll(): void {
    console.log('View All clicked');
  }
 }

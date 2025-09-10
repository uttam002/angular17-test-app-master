import { Component, ViewChild } from '@angular/core';
import { TsDataGrid, TsDataGridColumnConfig, TsDataGridComponent, TsDataGridFieldDataType, TsDataGridFieldType } from 'ts-components/grid';
import { WorkItem } from '../../../../../core/models/WorkItem';

@Component({
  selector: 'test-work-items',
  standalone: true,
  imports: [TsDataGridComponent],
  templateUrl: './workItems.component.html',
  styleUrl: './workItems.component.css'
})
export class WorkItemsComponent {
  @ViewChild('workItemsGrid') dataGrid!: TsDataGridComponent<WorkItem>;

  gridId = 'work-items-grid';
  primaryKey: keyof WorkItem = 'id';

  // work items data
  workItemsData: WorkItem[] = [
    { id: '1', workItem: 'Design Homepage', project: 'Website Redesign', priority: 'High', startDate: new Date('2024-01-10'), endDate: new Date('2024-01-20') },
    { id: '2', workItem: 'Develop API', project: 'Mobile App', priority: 'Medium', startDate: new Date('2024-02-01'), endDate: new Date('2024-02-15') },
    { id: '3', workItem: 'Test Payment Gateway', project: 'E-Commerce Platform', priority: 'High', startDate: new Date('2024-03-05'), endDate: new Date('2024-03-10') },
    { id: '4', workItem: 'Create Marketing Plan', project: 'Product Launch', priority: 'Low', startDate: new Date('2024-04-01'), endDate: new Date('2024-04-15') },
    { id: '5', workItem: 'Optimize Database', project: 'Internal Tools', priority: 'Medium', startDate: new Date('2024-05-10'), endDate: new Date('2024-05-20') }
  ];

  // Grid configuration
  gridFeatures = {
    isRowHoverEnable: true,
    showPagination: false,
    hideHeaderRow: false,
    allowDragAndDropColumn: false,
    toolbar:{
      allowSearching: false,
      allowFooter: false
    }
  }

  //Column Configuration

  columns: TsDataGridColumnConfig<WorkItem>[]= [
    {
      title: 'Work Item',
      field: 'workItem',
      isSortable: false,
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
    },
    {
      title: 'Project',
      field: 'project',
      isSortable: false,
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
    },
    {
      title: 'Start Date',
      field: 'startDate',
      isSortable: true,
      fieldDataType: TsDataGridFieldDataType.Date,
      fieldType: TsDataGridFieldType.Data,
    },
    {
      title: 'End Date',
      field: 'endDate',
      isSortable: true,
      fieldDataType: TsDataGridFieldDataType.Date,
      fieldType: TsDataGridFieldType.Data,
    },
    {
      title: 'Priority',
      field: 'priority',
      isSortable: true,
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
    }
  ]
  dataGridConfig: TsDataGrid<WorkItem> = {
    id: this.gridId,
    primaryKey: this.primaryKey,
    data: this.workItemsData,
    columns: this.columns,
    features: this.gridFeatures,
    actionButtons: [
      {
        buttonIconUrl: '../../../assets/images/edit-icon.svg',
        tooltipText: 'Edit',
        callback: (row: WorkItem) => this.onEdit(row),
        // visibleCallback: (row: WorkItem) => row.priority !== 'Low',
      },
      {
        buttonIconUrl: '../../../assets/images/delete-icon.svg',
        tooltipText: 'Delete',
        callback: (row: WorkItem) => this.onDelete(row),
        // visibleCallback: (row: WorkItem) => row.priority === 'High',
      }
    ]
  }
  onEdit(row: WorkItem): void {
    console.log('Edit clicked:', row);
  }

  onDelete(row: WorkItem): void {
    console.log('Delete clicked:', row);
  }

  viewAll(): void {
    console.log('View All clicked');
  }
 }

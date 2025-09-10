import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  TsDataGrid,
  TsDataGridComponent,
  TsDataGridFieldDataType,
  TsDataGridFieldType,
} from 'ts-components/grid';
import { ProjectRow } from '../../../../../../core/models/ProjectRow';
import { Router } from '@angular/router';
import { ProjectStateService } from '../../../../../../shared/services/projectState.service';

@Component({
  selector: 'test-project-list',
  standalone: true,
  imports: [TsDataGridComponent, CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit,AfterViewInit {
  dataGridConfig!: TsDataGrid<ProjectRow>;
  projects: ProjectRow[] = [];
  today = new Date();

  @ViewChild('typeTemplate') typeTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate') statusTemplate!: TemplateRef<any>;
  @ViewChild('tooltipTemplate', { static: true}) tooltipTemplate!: TemplateRef<any>;

  constructor(private router: Router, private projectStateService: ProjectStateService) {}

  onNameClick = (row: ProjectRow) => {
    this.router.navigate(['u/project-management/work-groups']);
    this.projectStateService.setProject(row);
  };

  ngOnInit(): void {
    this.projects = [
      {
        id: 1,
        code: 'PrjBench001',
        name: 'Bench',
        type: 'Monthly',
        technology: '.NET',
        startDate: '24-Jun-2011',
        status: 'In Progress',
        billableMembers: 1,
        nonBillableMembers: 93,
        dueDate: '30-Jun-2013',
        createdDate: '24-Jun-2011',
        totalHrs: '02:00',
        clientTotalHrs: '02:00',
        assignedHrs: '1688484:42',
        workTime: '2139234:25',
        utilizedHrs: '2132063:02',
        lastEntry: '09-Sep-2025',
      },
      {
        id: 2,
        code: 'PR-09080105',
        name: 'Miscellaneous',
        type: 'Hourly',
        technology: '.NET',
        startDate: '18-Aug-2009',
        status: 'In Progress',
        billableMembers: 2,
        nonBillableMembers: '27.5',
        dueDate: '18-Aug-2009',
        createdDate: '18-Aug-2009',
        totalHrs: '10006:00',
        clientTotalHrs: '10000:00',
        assignedHrs: '1472005:51',
        workTime: '1664880:16',
        utilizedHrs: '1651521:13',
        lastEntry: '09-Sep-2025',
      },
      {
        id: 3,
        code: 'PR-11090102',
        name: 'Client Support',
        type: 'Fixed',
        technology: 'Java',
        startDate: '01-Jan-2015',
        status: 'Completed',
        billableMembers: 5,
        nonBillableMembers: 10,
        dueDate: '01-Jan-2016',
        createdDate: '01-Jan-2015',
        totalHrs: '20000:00',
        clientTotalHrs: '19500:00',
        assignedHrs: '25000:00',
        workTime: '24000:00',
        utilizedHrs: '23900:00',
        lastEntry: '01-Jan-2016',
      },
      {
        id: 4,
        code: 'PR-15080215',
        name: 'Research AI',
        type: 'Yearly',
        technology: 'Python',
        startDate: '12-Dec-2020',
        status: 'Dev Completed',
        billableMembers: 3,
        nonBillableMembers: 7,
        dueDate: '12-Dec-2025',
        createdDate: '12-Dec-2020',
        totalHrs: '5000:00',
        clientTotalHrs: '4800:00',
        assignedHrs: '6000:00',
        workTime: '5900:00',
        utilizedHrs: '5800:00',
        lastEntry: '09-Sep-2025',
      }
    ];


    this.dataGridConfig = {
      id: 'projects-list-grid',
      primaryKey: 'code',
      data: this.projects,
      columns: [
        {
          title: 'ID',
          field: 'id',
          fieldDataType: TsDataGridFieldDataType.Number,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 5 },
          isHidden: true,
        },
        {
          title: 'Code',
          field: 'code',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 15 },
          isSortable: true,
        },
        {
          title: 'Name',
          field: 'name',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Link,
          style: { width: 30 },
          toolTipPosition: 'above',
          tooltipCustomRender: this.tooltipTemplate,
          callback: this.onNameClick,
          tooltipText: (rowData) => {
            console.log('Tooltip rowData:', rowData);
            return { row: rowData }
          }
        },
        {
          title: 'Type',
          field: 'type',
          fieldDataType: TsDataGridFieldDataType.CustomRenderTemplate,
          fieldType: TsDataGridFieldType.Data,
          style: {
            width: 9
          },
          customRenderCell: this.typeTemplate,
        },
        {
          title: 'Technology',
          field: 'technology',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Start Date',
          field: 'startDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Status',
          field: 'status',
          fieldDataType: TsDataGridFieldDataType.CustomRenderTemplate,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
          customRenderCell: this.statusTemplate,
        },
        {
          title: 'Billable Members',
          field: 'billableMembers',
          fieldDataType: TsDataGridFieldDataType.Number,
          fieldType: TsDataGridFieldType.Link,
          style: { width: 8 },
        },
        {
          title: 'Non-Billable Members',
          field: 'nonBillableMembers',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Link,
          style: { width: 10 },
        },
        {
          title: 'Due Date',
          field: 'dueDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Created Date',
          field: 'createdDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Total Hrs',
          field: 'totalHrs',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 8 },
        },
        {
          title: 'Client Total Hrs',
          field: 'clientTotalHrs',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 8 },
        },
        {
          title: 'Assigned Hrs',
          field: 'assignedHrs',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Work Time',
          field: 'workTime',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Utilized Hrs(%)',
          field: 'utilizedHrs',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
        {
          title: 'Last Entry',
          field: 'lastEntry',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 },
        },
      ],
      features: {
        isRowHoverEnable: true,
        showPagination: true,
        toolbar: { allowSearching: false, allowFooter: false },
        stickyFeature: {
          stickyColumns: ['code', 'name'],
          isStickyHeader: true,
        },
        paginatorFeatures: {
          defaultPagesize: 10,
          pageSizeOptions: [5, 10, 20],
          showFirstLastButton: true,
        },
      },
      actionButtons: [
        {
          buttonIconUrl: '../../../assets/images/edit-icon.svg',
          tooltipText: 'Edit',
          callback: (row: ProjectRow) => {
            console.log('Edit action on', row);
          },
        },
        {
          buttonIconUrl: '../../../assets/images/delete-icon.svg',
          tooltipText: 'Delete',
          action: (row: ProjectRow) => {
            console.log('Delete action on', row);
          },
        }
      ],
    } as TsDataGrid<ProjectRow>;
  }

  // showPopup(element: ProjectRow, ev: MouseEvent) {
  //   this.popupText = `${element.name} \nCode: ${element.code} \nStatus: ${element.status}`;
  //   const offset = 12;
  //   this.popupTop = ev.clientY + offset;
  //   this.popupLeft = ev.clientX + offset;
  //   this.popupVisible = true;
  // }

  // hidePopup() {
  //   this.popupVisible = false;
  // }
  ngAfterViewInit() {
    this.dataGridConfig.columns[3].customRenderCell = this.typeTemplate;
    this.dataGridConfig.columns[6].customRenderCell = this.statusTemplate;
    this.dataGridConfig.columns[2].tooltipCustomRender = this.tooltipTemplate;
  }
}

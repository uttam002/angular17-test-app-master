import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TsDataGrid, TsDataGridFieldDataType, TsDataGridFieldType, TsDataGridComponent } from 'ts-components/grid';
import { WorkGroupRow } from '../../../../../../core/models/WorkGroup';
import { workGroupSeedData } from './workGroupSeedData';
import { StatusBarComponent } from "../../../../../../shared/components/status-bar/status-bar.component";
import { Router } from '@angular/router';
import { ProjectStateService } from '../../../../../../shared/services/projectState.service';

@Component({
  selector: 'test-work-groups-list',
  standalone: true,
  imports: [MatTabsModule, TsDataGridComponent, StatusBarComponent],
  templateUrl: './work-groups-list.component.html',
  styleUrl: './work-groups-list.component.css',
})
export class WorkGroupsListComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private projectStateService: ProjectStateService) {}

  activeWorkGroupsDataGridConfig!: TsDataGrid<WorkGroupRow>;
  archivedWorkGroupsDataGridConfig!: TsDataGrid<WorkGroupRow>;
  activeWorkGroups: WorkGroupRow[] = [];
  archivedWorkGroups: any[] = [];
  currentWorkGroup = new Date();

  @ViewChild('statusesTemplate', { static: true }) statusesTemplate!: TemplateRef<any>;


  onClickOfTitle = (row: WorkGroupRow) => {
    this.router.navigate(['u/project-management/work-backlog']);
    this.projectStateService.setWorkGroup(row);
  };

  ngOnInit(): void {
    this.activeWorkGroups = [
      {
        id: 1,
        title: 'September-2025',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2023-09-30'),
        statuses: [
          { type: 'New', percentage: 40 },
          { type: 'In-Progress', percentage: 39.7 },
          { type: 'DevCompleted', percentage: 11 },
          { type: 'ReadyForTesting', percentage: 5 },
          { type: 'Closed', percentage: 44 },
        ],
      },
    ];
    this.archivedWorkGroups = workGroupSeedData;

    this.activeWorkGroupsDataGridConfig = {
      id: 'active-work-groups-grid',
      primaryKey: 'id',
      data: this.activeWorkGroups,
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
          title: 'Title',
          field: 'title',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Link,
          style: { width: 50 },
          callback: this.onClickOfTitle
        },
        {
          title: 'Start Date',
          field: 'startDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 20 },
        },
        {
          title: 'End Date',
          field: 'endDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 20 },
        },
        {
          title: 'Statuses',
          field: 'statuses',
          fieldDataType: TsDataGridFieldDataType.CustomRenderTemplate,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 70 },
          customRenderCell: this.statusesTemplate,
        },
      ],
      features: {
        isRowHoverEnable: true,
        showPagination: true,
        toolbar: { allowSearching: false, allowFooter: false },
        stickyFeature: {
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
          buttonIconUrl: '../../../assets/images/history.svg',
          tooltipText: 'History',
          callback: () => {
            console.log('History action on');
          },
        },
      ],
    }as TsDataGrid<WorkGroupRow>;

    this.archivedWorkGroupsDataGridConfig = {
      id: 'active-work-groups-grid',
      primaryKey: 'id',
      data: this.archivedWorkGroups,
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
          title: 'Title',
          field: 'title',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Link,
          style: { width: 50 },
          callback: this.onClickOfTitle
        },
        {
          title: 'Start Date',
          field: 'startDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 20 },
        },
        {
          title: 'End Date',
          field: 'endDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 20 },
        },
        {
          title: 'Statuses',
          field: 'statuses',
          fieldDataType: TsDataGridFieldDataType.CustomRenderTemplate,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 70 },
          customRenderCell: this.statusesTemplate,
        },
      ],
      features: {
        isRowHoverEnable: true,
        showPagination: true,
        toolbar: { allowSearching: false, allowFooter: false },
        stickyFeature: {
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
          buttonIconUrl: '../../../assets/images/history.svg',
          tooltipText: 'History',
          callback: () => {
            console.log('History action on');
          },
        },
      ],
    }as TsDataGrid<WorkGroupRow>;
  }

  ngAfterViewInit(): void {}
}

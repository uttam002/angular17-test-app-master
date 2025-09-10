import { Component, ViewChild } from '@angular/core';
import { TsDataGridColumnConfig, TsDataGridFieldDataType, TsDataGridFieldType, TsDataGridComponent, TsDataGrid } from 'ts-components/grid';
import { WorkGroup } from '../../../../../core/models/WorkGroup';

@Component({
  selector: 'test-work-groups',
  standalone: true,
  imports: [TsDataGridComponent],
  templateUrl: './workGroups.component.html',
  styleUrl: './workGroups.component.css'
})
export class WorkGroupsComponent {
  @ViewChild('workGroupsGrid') dataGrid!: TsDataGridComponent<WorkGroup>;

  gridId = 'work-groups-grid';
  primaryKey: keyof WorkGroup = 'id';

  // work groups data
  workGroupsData: WorkGroup[] = [
    { id: '1', groupName: 'Development Team', project: 'E-Commerce Platform' },
    { id: '2', groupName: 'Design Team', project: 'Website Redesign' },
    { id: '3', groupName: 'QA Team', project: 'Mobile App' },
    { id: '4', groupName: 'Marketing Team', project: 'Product Launch' },
    { id: '5', groupName: 'Support Team', project: 'Customer Service' },
  ];

  gridFeatures = {
    isRowHoverEnable: true,
    showPagination: false,
    hideHeaderRow: false,
    allowDragAndDropColumn: true,
    toolbar:{
      allowSearching: false,
      allowFooter: false
    }
  }

  columns: TsDataGridColumnConfig<WorkGroup>[] = [
    {
      title: 'Project',
      field: 'project',
      isSortable: true,
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
    },
    {
      title: 'Work Group',
      field: 'groupName',
      isSortable: true,
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
    }
  ];

  dataGridConfig: TsDataGrid<WorkGroup> = {
    columns: this.columns,
    data: this.workGroupsData,
    primaryKey: this.primaryKey,
    features: this.gridFeatures,
    id: this.gridId,
  };
}

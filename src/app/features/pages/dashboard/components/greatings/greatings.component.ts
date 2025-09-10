import { Component, ViewChild } from '@angular/core';
import {
  TsDataGrid,
  TsDataGridColumnConfig,
  TsDataGridComponent,
  TsDataGridFieldDataType,
  TsDataGridFieldType,
} from 'ts-components/grid';
import { Greatings } from '../../../../../core/models/Greatings';

@Component({
  selector: 'test-greatings',
  standalone: true,
  imports: [TsDataGridComponent],
  templateUrl: './greatings.component.html',
  styleUrl: './greatings.component.css'
})
export class GreatingsComponent {
  @ViewChild('greatings') dataGrid!: TsDataGridComponent<Greatings>;

  gridId = 'greatings-grid';
  primaryKey: keyof Greatings = 'id';

  // greatings data
  greatingsData: Greatings[] = [
    { id: 1, name: 'member1', category: 'A' },
    { id: 2, name: 'member2', category: 'B' },
    { id: 3, name: 'member3', category: 'A' },
    { id: 4, name: 'member4', category: 'C' },
    { id: 5, name: 'member5', category: 'B' },
  ];

  gridFeatures = {
    isRowHoverEnable: true,
    showPagination: false,
    hideHeaderRow: false,
    allowDragAndDropColumn: false,
    toolbar: {
      allowSearching: false,
      allowFooter: false,
    },
  };

  columns: TsDataGridColumnConfig<Greatings>[] = [
    {
      title: 'Name',
      field: 'name',
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
      isSortable: true,
    },
    {
      title: 'Category',
      field: 'category',
      fieldDataType: TsDataGridFieldDataType.String,
      fieldType: TsDataGridFieldType.Data,
      isSortable: true,
    },
  ];
  dataGridConfig: TsDataGrid<Greatings> = {
    columns: this.columns,
    data: this.greatingsData,
    features: this.gridFeatures,
    id: this.gridId,
    primaryKey: this.primaryKey,
    actionButtons: [
      {
        buttonIconUrl: '../../../assets/images/edit-icon.svg',
        tooltipText: 'Edit',
        callback: (item: Greatings) => {
          console.log('Edit action clicked for:', item);
        },
      },
      {
        buttonIconUrl: '../../../assets/images/delete-icon.svg',
        tooltipText: 'Delete',
        callback: (item: Greatings) => {
          console.log('Delete action clicked for:', item);
        },
      },
    ],
  };
}

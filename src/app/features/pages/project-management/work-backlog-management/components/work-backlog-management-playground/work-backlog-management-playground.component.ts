import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsDataGrid, TsDataGridFieldDataType, TsDataGridFieldType, TsDataGridComponent } from 'ts-components/grid';
import { CounterAnimationDirective } from '../../../../../../shared/directives/counter-animation.directive';

export interface WorkItem {
  id: string;
  title: string;
  description?: string;
  status: 'New' | 'In-Progress' | 'DevCompleted' | 'ReadyForTesting' | 'Closed';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignee?: string;
  createdDate: Date;
  dueDate?: Date;
  estimatedHours?: number;
  actualHours?: number;
  tags?: string[];
  projectId: string;
  workGroupId: string;
}

export interface WorkItemColumn {
  status: WorkItem['status'];
  title: string;
  count: number;
  color: string;
  items: WorkItem[];
}

export interface WorkBacklogView {
  type: 'dashboard' | 'list' | 'worklog';
  name: string;
  icon: string;
  active: boolean;
}

export interface WorkGroupInfo {
  title: string;
  startDate: Date;
  endDate: Date;
  projectName: string;
  projectCode: string;
}

@Component({
  selector: 'test-work-backlog-management-playground',
  standalone: true,
  imports: [CommonModule, TsDataGridComponent, CounterAnimationDirective],
  templateUrl: './work-backlog-management-playground.component.html',
  styleUrl: './work-backlog-management-playground.component.css',
})
export class WorkBacklogManagementPlaygroundComponent implements OnInit {
  @Input() workGroupInfo: WorkGroupInfo = {
    title: 'September - 2025',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-09-30'),
    projectName: 'Bench',
    projectCode: 'PrjBench001'
  };

  currentView: 'dashboard' | 'list' | 'worklog' = 'dashboard';

  viewOptions: WorkBacklogView[] = [
    { type: 'dashboard', name: 'Group By', icon: 'fas fa-th-large', active: false },
    { type: 'dashboard', name: 'Dashboard', icon: 'fas fa-chart-pie', active: true },
    { type: 'list', name: 'List View', icon: 'fas fa-list', active: false },
    { type: 'worklog', name: 'Work Log', icon: 'fas fa-clock', active: false },
    { type: 'dashboard', name: 'Filter', icon: 'fas fa-filter', active: false }
  ];

  kanbanColumns: WorkItemColumn[] = [
    {
      status: 'New',
      title: 'New',
      count: 0,
      color: '#8B5CF6',
      items: []
    },
    {
      status: 'In-Progress',
      title: 'In-Progress',
      count: 0,
      color: '#F59E0B',
      items: []
    },
    {
      status: 'DevCompleted',
      title: 'Dev Completed',
      count: 0,
      color: '#10B981',
      items: []
    },
    {
      status: 'ReadyForTesting',
      title: 'Ready for Testing',
      count: 0,
      color: '#8B5CF6',
      items: []
    },
    {
      status: 'Closed',
      title: 'Closed',
      count: 0,
      color: '#3B82F6',
      items: []
    }
  ];

  workItems: WorkItem[] = [];
  workItemsDataGridConfig!: TsDataGrid<WorkItem>;

  ngOnInit(): void {
    this.initializeWorkItems();
    this.updateKanbanColumns();
    this.initializeDataGrid();
  }

  private initializeWorkItems(): void {
    // Sample work items - in real app, this would come from a service
    this.workItems = [
      {
        id: 'WI-001',
        title: 'Implement user authentication',
        description: 'Add login and registration functionality',
        status: 'New',
        priority: 'High',
        assignee: 'John Doe',
        createdDate: new Date(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        estimatedHours: 8,
        projectId: 'PRJ-001',
        workGroupId: 'WG-001'
      },
      {
        id: 'WI-002',
        title: 'Design database schema',
        description: 'Create ERD and database tables',
        status: 'In-Progress',
        priority: 'Medium',
        assignee: 'Jane Smith',
        createdDate: new Date(),
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        estimatedHours: 12,
        projectId: 'PRJ-001',
        workGroupId: 'WG-001'
      }
    ];
  }

  private updateKanbanColumns(): void {
    this.kanbanColumns.forEach(column => {
      column.items = this.workItems.filter(item => item.status === column.status);
      column.count = column.items.length;
    });
  }

  private initializeDataGrid(): void {
    this.workItemsDataGridConfig = {
      id: 'work-items-grid',
      primaryKey: 'id',
      data: this.workItems,
      columns: [
        {
          title: 'ID',
          field: 'id',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 }
        },
        {
          title: 'Title',
          field: 'title',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 30 }
        },
        {
          title: 'Status',
          field: 'status',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 15 }
        },
        {
          title: 'Priority',
          field: 'priority',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 10 }
        },
        {
          title: 'Assignee',
          field: 'assignee',
          fieldDataType: TsDataGridFieldDataType.String,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 15 }
        },
        {
          title: 'Due Date',
          field: 'dueDate',
          fieldDataType: TsDataGridFieldDataType.Date,
          fieldType: TsDataGridFieldType.Data,
          style: { width: 15 }
        }
      ],
      features: {
        isRowHoverEnable: true,
        showPagination: true,
        toolbar: { allowSearching: true, allowFooter: false }
      }
    } as TsDataGrid<WorkItem>;
  }

  selectView(viewType: 'dashboard' | 'list' | 'worklog'): void {
    this.currentView = viewType;
    this.viewOptions.forEach(view => {
      view.active = view.type === viewType;
    });
  }

  selectWorkItem(item: WorkItem): void {
    console.log('Selected work item:', item);
    // Handle work item selection
  }

  getCounterOptions() {
    return {
      duration: 1500,
      easing: 'ease-out',
      decimalPlaces: 0
    };
  }
}

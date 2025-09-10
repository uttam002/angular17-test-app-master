export interface WorkGroup {
  id: string;
  groupName: string;
  project: string;
}
export interface WorkGroupRow {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;

  statuses: WorkGroupStatus[];
}

export interface WorkGroupStatus {
  type: 'New' | 'In-Progress' | 'DevCompleted' | 'ReadyForTesting' | 'Closed';
  percentage: number;
}
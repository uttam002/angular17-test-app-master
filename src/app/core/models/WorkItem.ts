export interface WorkItem {
  id: string;
  workItem: string;
  project: string;
  priority: 'Low' | 'Medium' | 'High';
  startDate: Date;
  endDate: Date;
 }

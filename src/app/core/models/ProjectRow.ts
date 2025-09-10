export interface ProjectRow {
  id: number;
  code: string;
  name: string;
  type: string;
  technology: string;
  startDate: string;
  status: string;
  billableMembers: number;
  nonBillableMembers: number | string;
  dueDate: string;
  createdDate: string;
  totalHrs?: string;
  clientTotalHrs?: string;
  assignedHrs?: string;
  workTime?: string;
  utilizedHrs?: string;
  lastEntry?: string;
  }
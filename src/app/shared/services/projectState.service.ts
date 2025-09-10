import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectRow } from '../../core/models/ProjectRow';
import { WorkGroupRow } from '../../core/models/WorkGroup';

@Injectable({
  providedIn: 'root'
})
export class ProjectStateService {
  private selectedProjectSubject = new BehaviorSubject<ProjectRow | null>(null);
  private selectedWorkGroupSubject = new BehaviorSubject<WorkGroupRow | null>(null);

  selectedProject$ = this.selectedProjectSubject.asObservable();
  selectedWorkGroup$ = this.selectedWorkGroupSubject.asObservable();

  setProject(project: ProjectRow) {
    this.selectedProjectSubject.next(project);
    // // persist in localStorage so it survives page refresh
    localStorage.setItem('lastVisitedProject', JSON.stringify(project));
  }
  getProject(): ProjectRow | null {
    const current = this.selectedProjectSubject.value;
    if (current) return current;

    //  fallback from localStorage if not in memory
    const saved = localStorage.getItem('lastVisitedProject');
    return saved ? JSON.parse(saved) : null;
    // return this.selectedProjectSubject.value;
  }

  setWorkGroup(workGroup: WorkGroupRow) {
    this.selectedWorkGroupSubject.next(workGroup);
    // // persist in localStorage so it survives page refresh
    localStorage.setItem('lastVisitedWorkGroup', JSON.stringify(workGroup));
  }

  getWorkGroup(): WorkGroupRow | null {
    const current = this.selectedWorkGroupSubject.value;
    if (current) return current;

    //  fallback from localStorage if not in memory
    const saved = localStorage.getItem('lastVisitedWorkGroup');
    return saved ? JSON.parse(saved) : null;
    // return this.selectedWorkGroupSubject.value;
  }
}

import { Component } from '@angular/core';
import { ProjectsDataComponent } from "./components/projects-data/projects-data.component";
import { WorkItemsComponent } from "./components/workItems/workItems.component";
import { GreatingsComponent } from "./components/greatings/greatings.component";
import { WorkGroupsComponent } from "./components/workGroups/workGroups.component";
import { TrainingCalenderComponent } from "./components/trainingCalender/trainingCalender.component";
import { GenericCardComponent } from "../../../shared/components/GenericCard/GenericCard.component";
import { CardConfig } from '../../../core/models/CardConfig';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectsDataComponent, WorkItemsComponent, GreatingsComponent, WorkGroupsComponent, TrainingCalenderComponent, GenericCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  workLogConfig: CardConfig = {
    title: 'Work Log',
    icon: 'fa fa-edit',
    background: 'bg-purple',
    enableAnimation: true,
    stats: [
      {
        label: 'Total Hrs',
        value: {
          value: 48,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-out',
            suffix: ':00'
          }
        }
      },
      {
        label: 'Work Log',
        value: {
          value: 0,
          animated: true,
          animationOptions: {
            duration: 1500,
            easing: 'ease-in',
            suffix: ':00'
          }
        }
      },
      {
        label: 'Rem. Hrs',
        value: {
          value: 48,
          animated: true,
          animationOptions: {
            duration: 2500,
            easing: 'ease-out',
            suffix: ':00'
          }
        }
      },
    ]
  };

  monthlyLeavesConfig: CardConfig = {
    title: 'Monthly Leaves',
    icon: 'fa fa-user-slash',
    background: 'bg-pink',
    enableAnimation: true,
    stats: [
      {
        label: 'Leaves',
        value: {
          value: 0,
          animated: true,
          animationOptions: {
            duration: 1800,
            easing: 'ease-out'
          }
        }
      },
      {
        label: 'Full/Half',
        value: {
          value: '0/0',
          animated: false
        }
      },
      {
        label: 'Total',
        value: {
          value: 0,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-in-out'
          }
        }
      },
    ]
  };

  quickLinksConfig: CardConfig = {
    title: 'Quick Links',
    icon: 'fa fa-link',
    background: 'bg-blue',
    links: [
      { text: 'Self Attendance ↗', url: '/attendance' }
    ]
  };

  newsConfig: CardConfig = {
    title: 'News & Events',
    icon: 'fa fa-calendar',
    background: 'bg-green',
    footerButton: {
      text: 'Holiday List',
      action: () => console.log('Holiday List clicked')
    }
  };

}

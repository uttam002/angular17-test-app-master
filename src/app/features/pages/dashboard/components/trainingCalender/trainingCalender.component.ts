import { Component } from '@angular/core';
import { TsCalendarConfig, TsIntialViewEnum, TsEventDisplayEnum, TsCalendarComponent } from 'ts-components/calendar';


@Component({
  selector: 'test-training-calender',
  standalone: true,
  imports: [TsCalendarComponent],
  templateUrl: './trainingCalender.component.html',
  styleUrl: './trainingCalender.component.css'
})
export class TrainingCalenderComponent {
  calendarConfig: TsCalendarConfig<any> = {
    displayTextKey: 'title',
    initialView: TsIntialViewEnum.DayGridMonth,
    height: '350px',
    initialDate: new Date('2025-09-01'),
    weekends: true,
    eventDisplay: TsEventDisplayEnum.Block,
    fixedWeekCount: false,
    headerToolbar: {
      left: ['title'],
    },
    dateFormat:{
      dayGridMonth:{
        titleFormat: 'MMM-yyyy'
      }
    },
    events: [
      {
        title: 'Trainee',
        start: '2025-09-03',
        color: '#f3d98c', // yellow shade
      },
      {
        title: 'Trainee',
        start: '2025-09-04',
        color: '#f3d98c',
      },
      {
        title: 'Trainee',
        start: '2025-09-05',
        color: '#f3d98c',
      },
      {
        title: 'Trainee',
        start: '2025-09-08',
        color: '#f3d98c',
      },
      {
        title: 'Trainee',
        start: '2025-09-09',
        color: '#f3d98c',
      },
      {
        title: 'Faculty',
        start: '2025-09-11',
        color: '#8cb6f3', // blue shade
      },
    ],
    callback: (data) => {
      console.log('Calendar event clicked:', data);
    },
    datesSetCallback: (data) => {
      console.log('Calendar view changed:', data);
    },
  };
}

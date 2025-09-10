import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from '../GenericCard/GenericCard.component';
import { CardConfig } from '../../../core/models/CardConfig';

@Component({
  selector: 'app-animated-cards-demo',
  standalone: true,
  imports: [CommonModule, GenericCardComponent],
  templateUrl: './animated-cards-demo.component.html',
  styleUrl: './animated-cards-demo.component.css'
})
export class AnimatedCardsDemoComponent {
  animationEnabled: boolean = true;

  workLogDemo: CardConfig = {
    title: 'Work Log',
    icon: 'fa fa-clock',
    background: 'bg-purple',
    enableAnimation: true,
    stats: [
      {
        label: 'Total Hours',
        value: {
          value: 48,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-out',
            suffix: ' hrs'
          }
        }
      },
      {
        label: 'Logged Today',
        value: {
          value: 8,
          animated: true,
          animationOptions: {
            duration: 1500,
            easing: 'ease-in',
            suffix: ' hrs'
          }
        }
      },
      {
        label: 'Remaining',
        value: {
          value: 40,
          animated: true,
          animationOptions: {
            duration: 2500,
            easing: 'ease-out',
            suffix: ' hrs'
          }
        }
      },
    ]
  };

  statisticsDemo: CardConfig = {
    title: 'Statistics',
    icon: 'fa fa-chart-bar',
    background: 'bg-blue',
    enableAnimation: true,
    stats: [
      {
        label: 'Total Users',
        value: {
          value: 1250,
          animated: true,
          animationOptions: {
            duration: 3000,
            easing: 'ease-out',
            formatNumber: true,
            separator: ','
          }
        }
      },
      {
        label: 'Active Sessions',
        value: {
          value: 89,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-in-out'
          }
        }
      },
      {
        label: 'Success Rate',
        value: {
          value: 94.5,
          animated: true,
          animationOptions: {
            duration: 2500,
            easing: 'ease-out',
            decimalPlaces: 1,
            suffix: '%'
          }
        }
      },
    ]
  };

  revenueDemo: CardConfig = {
    title: 'Revenue',
    icon: 'fa fa-dollar-sign',
    background: 'bg-green',
    enableAnimation: true,
    stats: [
      {
        label: 'Monthly Revenue',
        value: {
          value: 125000,
          animated: true,
          animationOptions: {
            duration: 4000,
            easing: 'ease-out',
            prefix: '$',
            formatNumber: true,
            separator: ','
          }
        }
      },
      {
        label: 'Growth Rate',
        value: {
          value: 12.5,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-in',
            decimalPlaces: 1,
            suffix: '%'
          }
        }
      },
      {
        label: 'Target',
        value: {
          value: 150000,
          animated: true,
          animationOptions: {
            duration: 3000,
            easing: 'ease-in-out',
            prefix: '$',
            formatNumber: true,
            separator: ','
          }
        }
      },
    ]
  };

  performanceDemo: CardConfig = {
    title: 'Performance',
    icon: 'fa fa-tachometer-alt',
    background: 'bg-pink',
    enableAnimation: true,
    stats: [
      {
        label: 'CPU Usage',
        value: {
          value: 75,
          animated: true,
          animationOptions: {
            duration: 2000,
            easing: 'ease-out',
            suffix: '%'
          }
        }
      },
      {
        label: 'Memory',
        value: {
          value: 8.5,
          animated: true,
          animationOptions: {
            duration: 1800,
            easing: 'ease-in',
            decimalPlaces: 1,
            suffix: ' GB'
          }
        }
      },
      {
        label: 'Uptime',
        value: {
          value: 99.9,
          animated: true,
          animationOptions: {
            duration: 3000,
            easing: 'ease-out',
            decimalPlaces: 1,
            suffix: '%'
          }
        }
      },
    ]
  };

  refreshCounters(): void {
    // Trigger re-animation by updating values
    this.workLogDemo = { ...this.workLogDemo };
    this.statisticsDemo = { ...this.statisticsDemo };
    this.revenueDemo = { ...this.revenueDemo };
    this.performanceDemo = { ...this.performanceDemo };
  }

  toggleAnimation(): void {
    this.animationEnabled = !this.animationEnabled;

    // Update all cards' animation settings
    this.workLogDemo.enableAnimation = this.animationEnabled;
    this.statisticsDemo.enableAnimation = this.animationEnabled;
    this.revenueDemo.enableAnimation = this.animationEnabled;
    this.performanceDemo.enableAnimation = this.animationEnabled;
  }
}

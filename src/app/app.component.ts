import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from './utils/colors';
import * as c3 from 'c3';

@Component({
  selector: 'app-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  view: string = 'month';

  viewDate: Date = new Date();

  newEvent: string;

  ngAfterViewInit() {
    let chart = c3.generate({
      data: {
        columns: [
          ['assigned', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log('onclick', d, i); },
        onmouseover: function (d, i) { console.log('onmouseover', d, i); },
        onmouseout: function (d, i) { console.log('onmouseout', d, i); }
      },
      gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });

    setTimeout(function () {
      chart.load({
        columns: [['assigned', 10]]
      });
    }, 1000);

    setTimeout(function () {
      chart.load({
        columns: [['assigned', 50]]
      });
    }, 2000);

    setTimeout(function () {
      chart.load({
        columns: [['assigned', 70]]
      });
    }, 3000);

    setTimeout(function () {
      chart.load({
        columns: [['assigned', 0]]
      });
    }, 4000);

    setTimeout(function () {
      chart.load({
        columns: [['assigned', 100]]
      });
    }, 5000);


    let chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log('onclick', d, i); },
        onmouseover: function (d, i) { console.log('onmouseover', d, i); },
        onmouseout: function (d, i) { console.log('onmouseout', d, i); }
      },
      donut: {
        title: 'Iris Petal Width'
      }
    });

    setTimeout(function () {
      chart2.load({
        columns: [
          ['setosa', 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
          ['versicolor', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
          ['virginica', 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
      });
    }, 1500);

    setTimeout(function () {
      chart2.unload({
        ids: 'data1'
      });
      chart2.unload({
        ids: 'data2'
      });
    }, 2500);

    let chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        columns: [
          ['done', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log('onclick', d, i); },
        onmouseover: function (d, i) { console.log('onmouseover', d, i); },
        onmouseout: function (d, i) { console.log('onmouseout', d, i); }
      },
      gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });

    setTimeout(function () {
      chart3.load({
        columns: [['done', 10]]
      });
    }, 1000);

    setTimeout(function () {
      chart3.load({
        columns: [['done', 50]]
      });
    }, 2000);

    setTimeout(function () {
      chart3.load({
        columns: [['done', 70]]
      });
    }, 3000);

    setTimeout(function () {
      chart3.load({
        columns: [['done', 0]]
      });
    }, 4000);

    setTimeout(function () {
      chart3.load({
        columns: [['done', 95]]
      });
    }, 5000);

  }


  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      title: 'Event 2',
      color: colors.blue,
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      title: 'Event 3',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    },
    {
      title: 'Event 4',
      color: colors.red,
      start: new Date(),
      draggable: true,
      actions: [
        {
          label: '<i class="fa fa-fw fa-pencil"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          }
        },
        {
          label: '<i class="fa fa-fw fa-times"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    }
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  refresh: Subject<any> = new Subject();

  eventDropped({
                 event,
                 newStart,
                 newEnd
               }: CalendarEventTimesChangedEvent): void {
    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
  }

  addEvent(): void {
    this.events.push({
      title: this.newEvent,
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}

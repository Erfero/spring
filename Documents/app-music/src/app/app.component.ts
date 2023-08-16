import { Component } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';
import { fadeInAnimation } from './animation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})


export class AppComponent {
  title = 'app-music';
  receivedText: string | undefined;
  count!: string;
  timerObservable! : Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),
      map((num: number) => {
        const hours = Math.floor(num/3600);
        const minute = Math.floor(num/60);
        return `Time: ${this.format(hours)} h ${this.format(minute-hours * 60)} m ${this.format(num - minute * 60)} s`
      })
    )
this.timerObservable.subscribe(num => {
  this.count = num;
})
  }
  format(num: number):string {
    return (num < 10 ? "0" : "") + num;
  }

  parentReceive($event: string) {
    this.receivedText = $event
    console.log("parent: " + $event);
    
  }
  
}

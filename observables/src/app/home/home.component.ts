import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // private myinterval: Subscription;
  private customObservable: Observable<any>;
  private observable;
  constructor() { }

  ngOnInit() {
    // this.myinterval = interval().subscribe((count: number) => {
    //   console.log(count);
    // });
    this.customObservable = new Observable(observer => {
      let count = 0;
      // Throwing error in observable
      // if (count === 0) {
      //   observer.error(new Error('This is an error'));
      // }

      // if (count === 0) {
      //   observer.complete();
      // }
      setInterval(() => observer.next(count++), 1000);
    });

    const m = map(data => `Round data: ${data}`);
    this.observable = this.customObservable.pipe(m).subscribe(data => {
      console.log(data); // First callback  Where normal data is passed
    },
    err => {
      console.error(err); // Second callback where error is handled
    },
    () => {
      console.log('We completed bois'); // No need to unsubscribe if completed.
    });
  }
  ngOnDestroy() {
    // this.myinterval.unsubscribe();
    this.observable.unsubscribe();
  }

}

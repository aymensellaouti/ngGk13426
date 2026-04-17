import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-rxjs',
    templateUrl: './test-rxjs.component.html',
    styleUrls: ['./test-rxjs.component.css'],
    standalone: false
})
export class TestRxjsComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  counter = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });

    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    this.myObservable$.subscribe({
      next: (val) => {
        this.counter = val;
      },
    });
    // setTimeout(() => {
      this.myObservable$
      .pipe(
        // 5 4 3 2 1
        map(val => val * 3),
        // 15 12 9 6 3
        filter(data => data % 2 == 0)
        // 12 6
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        complete: () => {
          this.toastr.warning('BOOOM !!!!');
        },
      });
    // }, 3000)
    // setTimeout(
    //   () => {
    // this.subscription.add(
    //   this.myObservable$
    //     .pipe(
    //       // 5 4 3 2 1
    //       map((data) => data * 3),
    //       // 15 12 9 6 3
    //       filter((data) => !(data % 2))
    //       // 12 6
    //     )
    //     .subscribe({
    //       next: (data) => {
    //         this.toastr.info('' + data);
    //       },
    //       complete: () => {
    //         this.toastr.warning('BOOOM !!!!');
    //       },
    //     })
    // );
    //       },
    //       3000
    //     )
  }
}

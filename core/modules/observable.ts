import _ from 'lodash/fp';
import * as R from 'rxjs';

const observable$ = new R.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

observable$.subscribe(console.log);

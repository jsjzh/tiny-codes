import _ from 'lodash/fp';
import * as R from 'rxjs';

// const arr = [1, 2, 3, 4, 5];

// console.log(_.filter<number>((pre) => pre > 1)(arr));

const click$ = R.fromEvent<MouseEvent>(document, 'click').pipe(R.take(3));

click$.subscribe((e) => console.log(e));

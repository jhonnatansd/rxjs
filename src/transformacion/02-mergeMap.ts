import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, map, take, takeUntil } from 'rxjs/operators';


const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap( letra => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
)
.subscribe( console.log );


const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
)
.subscribe( console.log )

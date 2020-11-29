import { of, fromEvent } from 'rxjs';
import { take, tap, first, map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    //takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)
)
//No se emite ningun valor hasta que cumple la condicion del FIRST
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete')
});

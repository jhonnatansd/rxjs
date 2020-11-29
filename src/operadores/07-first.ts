import { of, fromEvent } from 'rxjs';
import { take, tap, first, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap( console.log ),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first( event => event.clientY >= 150)
)
//No se emite ningun valor hasta que cumple la condicion del FIRST
.subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete')
});

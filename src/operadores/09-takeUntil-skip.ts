import { of, fromEvent, interval } from 'rxjs';
import { take, tap, first, map, takeWhile, takeUntil, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

//Observables
const counter$ = interval(1000);
const click$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log('Tap antes del skip')),
    skip(1),
    tap(() => console.log('Tap despues del skip'))
);

counter$.pipe(
    takeUntil(click$) //completa la subscripcion del counter en la primera emision del click
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});


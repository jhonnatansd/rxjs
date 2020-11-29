import { of, fromEvent, interval, from } from 'rxjs';
import { take, tap, first, map, takeWhile, takeUntil, skip, distinct } from 'rxjs/operators';

const numeros$ = of<number|string>(1,1,'1',1,2,3,2,2,4,4,4,5,6,7,8,8,1,2,3);

numeros$.pipe(
    distinct() // ===
)
.subscribe(console.log);

//******************************************************** */
interface Persona {
    nombre: string;
}

const personajes: Persona[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log);
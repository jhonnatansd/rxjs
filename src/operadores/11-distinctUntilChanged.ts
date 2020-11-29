import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number|string>(1,1,'1',1,2,3,2,2,4,4,4,5,6,7,8,8,1,2,3);

numeros$.pipe(
    distinctUntilChanged() // ===
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
        nombre: 'Megaman'
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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    distinctUntilChanged((x, y) => x.nombre === y.nombre)
)
.subscribe(console.log);
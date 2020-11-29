import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);
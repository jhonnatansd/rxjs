import { fromEvent, interval } from 'rxjs';
import { map, tap, take, reduce } from 'rxjs/operators';

//javascript
const numbers = [1,2,3,4,5];

const total = numbers.reduce((acum: number, valorActual: number) => {
    return acum + valorActual;
});

console.log('Total arr: ', total);

//typescrit
const totalReducer = (acum: number, valorActual: number) => {
    return acum + valorActual;
};

interval(500).pipe(
    take(6), // fuerza el complete del observable despues del valor 6
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
});
import { from } from "rxjs";
import { reduce, scan } from "rxjs/operators";

//javascript
const numbers = [1,2,3,4,5];

const totalReducer = (acc, cur) => acc + cur;

//Reduce
from(numbers).pipe(
    reduce(totalReducer, 0)
)
.subscribe(console.log);

//Scan
from(numbers).pipe(
    scan(totalReducer, 0)
)
.subscribe(console.log);

//********************************************** */
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'fher', autenticado: false, token: null},
    {id: 'fher', autenticado: true, token: 'ABC'},
    {id: 'fher', autenticado: true, token: 'ABC123'}
];

const state$ = from( user ).pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur}
    }, { edad: 33 })
);

state$.subscribe(console.log);


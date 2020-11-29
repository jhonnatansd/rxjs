import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_pages=5';

// 1.- Fetch con Promesas
// const manejaErrores = ( response: Response ) => {
//     if( !response.ok ){
//         throw new Error( response.statusText );
//     }
//     return response;
// };

// const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( manejaErrores )
//     .then( res => res.json())
//     .then( console.log )
//     .catch( err => console.warn('error en usuarios', err))

//2.- Ajax con RxJs
const atrapaError = (err: AjaxError) => {
    console.warn('errors en: ', err);
    return of([]);
};

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
)
.subscribe( console.log );
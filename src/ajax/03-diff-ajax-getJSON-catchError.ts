import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin111.org/delay/1';

const manejaError = (resp : AjaxError) => {
    console.warn('error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

const obs$ = ajax.getJSON( url ).pipe(
    catchError( manejaError )
);
const obs2$ = ajax( url ).pipe(
    catchError( manejaError )
);

obs$.subscribe( console.log );
obs2$.subscribe( console.log );
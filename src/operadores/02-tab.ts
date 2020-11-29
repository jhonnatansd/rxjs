import { range, of, from, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

range(1,10)
    .pipe(
        tap( val => console.log('antes', val)),
        map( val => val * 10),
        tap({
            next: val => console.log('despues', val),
            complete: () => console.log('Se termino todo')
        })
    )
    .subscribe( console.log );

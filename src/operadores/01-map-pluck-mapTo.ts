import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'

// range(1,5)
//     .pipe(
//         map<number, string>( val => (val * 10).toString())
//     )
//     .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe( 
    map(event => event.code)
 );

const keyupPluck$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe( 
    pluck('target', 'baseURI')
);

const keyupMapTo$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe( 
    mapTo('Tecla presionada')
);


keyup$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));
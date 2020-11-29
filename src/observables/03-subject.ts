import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subs => {
    
    const interval = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval( interval );
        console.log('Intervalo destruido');
    };

});

/**
 * 1- casteo multiple
 * 2- tambien es un observer
 * 3- next, error, complete
 */
const subject$ = new Subject();
const intervalo = intervalo$.subscribe( subject$ );

// const sub1 = intervalo$.subscribe( num => console.log('sub1: ', num));
// const sub2 = intervalo$.subscribe( num => console.log('sub2: ', num));

const sub1 = subject$.subscribe( num => console.log('sub1: ', num));
const sub2 = subject$.subscribe( num => console.log('sub2: ', num));

setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    intervalo.unsubscribe();
}, 3500);



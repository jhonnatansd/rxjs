import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    //Crear un contador 1,2,3,4,5
    let cont = 0;

    const interval = setInterval(() => {
        cont ++;
        subscriber.next( cont );
    }, 1000);

    setTimeout(() => {
        subscriber.complete(); //dispara al return de este observable
    }, 2500);

    return () => {
        clearInterval( interval );
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add( subs2 )
     .add( subs3 );

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
}, 3000);









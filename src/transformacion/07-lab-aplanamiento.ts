import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

//Helper
const peticionHttpLogin = ( userPass ) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
                                                .pipe(
                                                    pluck('response', 'token'),
                                                    catchError(err => of('xxx'))
                                                )


//creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent<Event>(form, 'submit');

submitForm$.pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    // mergeMap( peticionHttpLogin ), //Realiza todas las peticiones 
    // switchMap( peticionHttpLogin ), //Realiza la ultima peticion y cancela las otras
    exhaustMap( peticionHttpLogin ) //Realiza 1 solo peticion e ignora todas las demas peticiones hasta que esta termine
)
.subscribe( console.log );
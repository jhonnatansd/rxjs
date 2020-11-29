import { forkJoin, of } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const GITHUB_API = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}`).pipe(catchError(err => of({}))),
    repos: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/repos`).pipe(catchError(err => of([]))),
    gists: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/gists`).pipe(catchError(err => of([]))),
})
.subscribe( console.log )
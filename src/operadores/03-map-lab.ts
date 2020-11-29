import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';



const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum nunc, a pharetra eros. Nulla magna lorem, luctus a lorem id, varius volutpat metus. Quisque sodales faucibus consectetur. Sed magna nisl, maximus sit amet ante id, laoreet convallis ligula. Phasellus vulputate in felis nec sagittis. Quisque lobortis vehicula arcu quis mattis. Sed et nisi orci.
<br/><br/>
Aenean volutpat odio eu lacus laoreet scelerisque. Donec ultricies sit amet tellus in bibendum. Sed ac nisi efficitur, porttitor felis id, aliquet libero. Donec vitae nulla turpis. Donec accumsan semper neque, ut semper ex sodales nec. Morbi sed dapibus odio. Aliquam erat volutpat. Cras vel nisl ligula. In venenatis, lorem sed pharetra ornare, est ipsum placerat lorem, vel elementum ex ipsum vel justo. Nulla facilisi. Nunc quis dui congue, tincidunt tortor non, tempus leo. Integer eget diam a dui rutrum consectetur at ut augue. Maecenas ullamcorper augue non magna vehicula, eu tempus nisl hendrerit. Vestibulum lobortis ante et rutrum tincidunt. Sed auctor dui ut congue semper. Fusce orci leo, sagittis nec nunc vitae, maximus bibendum risus.
<br/><br/>
Aenean dictum semper velit, elementum bibendum nisl volutpat nec. Donec non tristique orci, in porta augue. Sed vel sapien lacinia, bibendum justo eget, porttitor massa. Vivamus venenatis mattis mi, sit amet blandit est scelerisque quis. In feugiat tincidunt quam in tincidunt. Integer commodo enim ac leo vestibulum, et ornare sem dignissim. Cras ut velit at felis condimentum interdum at at lorem.
<br/><br/>
Vivamus a velit gravida, efficitur est suscipit, mattis quam. Nam fringilla posuere mauris eleifend suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem nec ante malesuada cursus. Pellentesque eget lacus id purus pharetra bibendum. Suspendisse et nunc sollicitudin, dictum neque ac, imperdiet sem. Cras ut iaculis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eget elit a nibh faucibus eleifend non in enim. Fusce venenatis ante fermentum sollicitudin eleifend. Nullam pulvinar ipsum vitae ex imperdiet, a vehicula massa imperdiet.
<br/><br/>
Integer quis fermentum neque. Sed quis diam vestibulum, posuere dui quis, lacinia tortor. Nam libero dui, gravida at ullamcorper nec, imperdiet at dolor. Cras egestas metus eu ipsum porttitor, et finibus risus dignissim. Mauris varius nisi fermentum auctor blandit. Integer eget sem sed est placerat porttitor ornare eget quam. Vestibulum aliquet nibh a nisi sollicitudin feugiat. Quisque a nibh est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas et molestie nibh, eget euismod eros. Aliquam auctor luctus erat, id fringilla est vestibulum vel.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum nunc, a pharetra eros. Nulla magna lorem, luctus a lorem id, varius volutpat metus. Quisque sodales faucibus consectetur. Sed magna nisl, maximus sit amet ante id, laoreet convallis ligula. Phasellus vulputate in felis nec sagittis. Quisque lobortis vehicula arcu quis mattis. Sed et nisi orci.
<br/><br/>
Aenean volutpat odio eu lacus laoreet scelerisque. Donec ultricies sit amet tellus in bibendum. Sed ac nisi efficitur, porttitor felis id, aliquet libero. Donec vitae nulla turpis. Donec accumsan semper neque, ut semper ex sodales nec. Morbi sed dapibus odio. Aliquam erat volutpat. Cras vel nisl ligula. In venenatis, lorem sed pharetra ornare, est ipsum placerat lorem, vel elementum ex ipsum vel justo. Nulla facilisi. Nunc quis dui congue, tincidunt tortor non, tempus leo. Integer eget diam a dui rutrum consectetur at ut augue. Maecenas ullamcorper augue non magna vehicula, eu tempus nisl hendrerit. Vestibulum lobortis ante et rutrum tincidunt. Sed auctor dui ut congue semper. Fusce orci leo, sagittis nec nunc vitae, maximus bibendum risus.
<br/><br/>
Aenean dictum semper velit, elementum bibendum nisl volutpat nec. Donec non tristique orci, in porta augue. Sed vel sapien lacinia, bibendum justo eget, porttitor massa. Vivamus venenatis mattis mi, sit amet blandit est scelerisque quis. In feugiat tincidunt quam in tincidunt. Integer commodo enim ac leo vestibulum, et ornare sem dignissim. Cras ut velit at felis condimentum interdum at at lorem.
<br/><br/>
Vivamus a velit gravida, efficitur est suscipit, mattis quam. Nam fringilla posuere mauris eleifend suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae sem nec ante malesuada cursus. Pellentesque eget lacus id purus pharetra bibendum. Suspendisse et nunc sollicitudin, dictum neque ac, imperdiet sem. Cras ut iaculis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eget elit a nibh faucibus eleifend non in enim. Fusce venenatis ante fermentum sollicitudin eleifend. Nullam pulvinar ipsum vitae ex imperdiet, a vehicula massa imperdiet.

`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//function que haga el canculo
const calcularPorcentajeScroll = (event) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, 'scroll').pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);


scroll$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});

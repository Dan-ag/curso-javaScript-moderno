import { getJoke } from './http-provider';

const body = document.body;
let btnOtro, olList;

const createJokeHtml = () => {
  const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button  class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-grooo">
    </ol>
  `;

  const divJokes = document.createElement( 'div' );
  divJokes.innerHTML = html;

  body.append( divJokes );
};

const events = () => {
  olList = document.querySelector( 'ol' );
  btnOtro = document.querySelector( 'button' );
  
  btnOtro.addEventListener( 'click', async () => {
    console.log( 'Hola mundo cruel!' );

    btnOtro.disabled = true;
    drawJoke( await getJoke() );
    btnOtro.disabled = false;
  })
};

const drawJoke = ( joke ) => {
  const olItem = document.createElement('li')

  olItem.innerHTML = `<b>${ joke.id }</b>: ${ joke.value }`;
  olItem.classList.add( 'list-group-item' );
  
  olList.append( olItem );
}



export const init = () => {
  createJokeHtml();
  events();
};
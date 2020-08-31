import {
  searchHeroPromiseWithAsync,
  promiseFast
} from './js/promises';

const herosId = [ 'capi', 'iron', 'spider' ];

export const getHeroesArr = async () => {

  const arrHeroes = herosId.map( id => searchHeroPromiseWithAsync( id ) );

  for await ( const hero of arrHeroes ) {
    console.log( hero );
  }

};

export const getHeroIfAwait = async () => {

  const arrHeroes = herosId.map( id => searchHeroPromiseWithAsync( id ) );

  if ( ( await arrHeroes[ 1 ] ).name === 'Ironman') {
    console.log( 'Es el mejor de todos....' );
  } else {
    console.log( 'Naaaaaa....' );
  }

};

getHeroIfAwait();




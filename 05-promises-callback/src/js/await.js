import {
  searchHeroPromiseWithAsync,
  promiseFast
} from './js/promises';

const herosId = [ 'capi', 'iron', 'spider' ];

export const getHeroesArr = async () => {
  const arrHeroes = [];


  // for ( let i = 0; i < herosId.length; i++ ) {
  //   const hero = await searchHeroPromiseWithAsync( herosId[ i ] );
  //   arrHeroes.push( hero );
  // }

  for await ( const heroId of herosId ) {
    const hero = await searchHeroPromiseWithAsync( heroId );
    arrHeroes.push( hero );
  }

  console.log( arrHeroes );
};


export const getHeroeAwait = async ( id ) => {

  try {
    const heroe = await searchHeroPromiseWithAsync( id );
    console.log( heroe );
  } catch ( error ) {
    console.warn('Catch: ', error);
  }

};

getHeroeAwait( herosId[ 0 ] );

 
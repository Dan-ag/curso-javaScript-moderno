const heroes = {
  capi: {
    name: 'Capitán America',
    power: 'Aguantar inyecciones sin morir'
  },
  iron: {
    name: 'Ironman',
    power: 'Absurda cantidad de dinero'
  },
  spider: {
    name: 'Spiderman',
    power: 'Sentido aragñido'
  }
};

export const searchHeroPromiseWithNew = ( id ) => {

  const heroe = heroes[ id ];

  return new Promise( ( resolve, reject ) => {
    if ( heroe ) {
      resolve( heroe );
    } else {
      reject( `No existe un hero con el id ${ id }` );
    }
  } );

};

export const searchHeroPromiseWithAsync = async ( id ) => {
  const heroe = heroes[ id ];

  if ( heroe ) {
    return heroe;
  } else {
    // throw new Error( `No existe un hero con el id ${ id }`)
    throw `No existe un hero con el id ${ id }`;
  }
};

const promiseSlow = new Promise( ( resolve, reject ) => {
  setTimeout( () => resolve( 'Promise slow' ), 3000 );
} );

const promiseTypical = new Promise( ( resolve, reject ) => {
  setTimeout( () => resolve( 'Promise typical' ), 1500 );
} );

const promiseFast= (id) => {

  const heroe = heroes[ id ];

  return new Promise( ( resolve, reject ) => {

    setTimeout( () => {
      if ( heroe ) {
        resolve( heroe );
      } else {
        reject( `No existe un hero con el id ${ id }` );
      }
    }, 500 );

  } );
};

export {
  promiseSlow,
  promiseTypical,
  promiseFast,
};
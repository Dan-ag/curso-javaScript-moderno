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


export const searchHero = ( id, callback ) => {
  const heroe = heroes[ id ];

  if ( heroe ) {
    callback( undefined, heroe );
  } else {
    callback( `No existe un hero con el id ${ id }` );
  }
};

export const searchHeroPromise = async  ( id ) => {

  const heroe = heroes[ id ];

  if ( heroe ) {
    return heroe;
  } else {
    // throw new Error( `No existe un hero con el id ${ id }`)
    throw `No existe un hero con el id ${ id }`;
  }
};
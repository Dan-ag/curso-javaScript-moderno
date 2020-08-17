const moduleBlackJack = ( () => {
  'use strict';

  let deck = [];
  const types = [ 'C', 'D', 'H', 'S' ],
    specials = [ 'A', 'J', 'Q', 'K' ];

  const pathCard = 'assets/card';

  let pointsPlayers = [];
  const pointsHtml = document.querySelectorAll( 'small' ),
    cardsContainer = document.querySelectorAll( '.card-container' );

  // HTML references
  const btnNewGame = document.querySelector( '#btnNewGame' ),
    btnGetCard = document.querySelector( '#btnGetCard' ),
    btnStop = document.querySelector( '#btnStop' );

  // Init Game
  const initGame = ( numPlayers = 1 ) => {
    pointsPlayers = [];

    for ( let i = 0; i <= numPlayers; i++ ) {
      pointsPlayers.push( 0 );
      cardsContainer[ i ].innerHTML = '';
      pointsHtml[ i ].innerHTML = 0;
    }
    createDeck();
    btnGetCard.disabled = false;
    btnStop.disabled = false;
  };

  const createDeck = () => {
    deck = [];
    for ( let i = 2; i <= 10; i++ ) {
      types.forEach( type => {
        deck.push( i + type );
      } );
    }

    for ( const type of types ) {
      for ( const sp of specials ) {
        deck.push( sp + type );
      }
    }
    shuffle( deck )
  };

  // Get Cards
  const getCard = () => {
    if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
    }

    return deck.pop();
  };

  const cardValue = ( card ) => (
    !isNaN( parseInt( card ) )
      ? parseInt( card )
      : card[ 0 ] === 'A'
        ? 11
        : 10
  );

  // turn: 0 firts player, last turn cpu player!
  const addPoint = ( card, turn ) => {
    pointsPlayers[ turn ] = pointsPlayers[ turn ] + cardValue( card );
    pointsHtml[ turn ].innerHTML = pointsPlayers[ turn ];

    return pointsPlayers[ turn ];
  };

  const addCard = ( card, turn ) => {
    const imgCard = document.createElement( 'img' );
    imgCard.src = `${ pathCard }/${ card }.png`;

    cardsContainer[ turn ].append( imgCard );
  };

  // Cpu turn
  const turnCpu = ( pointMin ) => {

    do {
      const card = getCard();
      addPoint( card, pointsPlayers.length - 1 );
      addCard( card, pointsPlayers.length - 1 );

      if ( pointMin > 21 ) {
        break;
      }

    } while ( ( pointsPlayers[ pointsPlayers.length - 1 ] <= pointMin ) && pointMin <= 21 );
  };

  /* Events */

  // Get Card Button
  btnGetCard.addEventListener( 'click', () => {
    const card = getCard();

    const pointPlayer = addPoint( card, 0 );
    addCard( card, 0 );

    if ( pointPlayer > 21 ) {
      console.warn( 'Perdiste!' );
      btnGetCard.disabled = true;
      btnStop.disabled = true;

      turnCpu( pointPlayer );
    } else if ( pointPlayer === 21 ) {
      turnCpu( pointPlayer );

      if ( pointPlayer === 21 ) {
        console.warn( 'Perdiste!' );
      } else {
        console.warn( 'Ganaste!' );
      }
      btnGetCard.disabled = true;
      btnStop.disabled = true;
    }

  } );

  // Stop Button
  btnStop.addEventListener( 'click', () => {
    turnCpu( pointsPlayers[ 0 ] );
    const pointCpu = pointsPlayers[ pointsPlayers.length - 1 ];
    const pointUser = pointsPlayers[ 0 ];

    if ( pointCpu > 21 ) {
      console.warn( 'Ganaste!' );
    } else if ( pointCpu === 21 && pointUser < 21 ) {
      console.warn( 'Perdiste!' );
    } else if ( pointCpu === 21 && pointUser === 21 ) {
      console.warn( 'Empataste!' );
    } else {
      console.warn( 'Perdiste!' );
    }
    btnGetCard.disabled = true;
    btnStop.disabled = true;

  } );

  // New Game Button
  btnNewGame.addEventListener( 'click', () => {
    initGame();
  } );

  return {
    newGame: initGame
  }
} )();





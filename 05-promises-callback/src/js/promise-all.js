import { searchHero } from './js/callbacks';
import { searchHeroPromise } from './js/promesas';
import './styles.css';

const heroId1 = 'capi';
const heroId2 = 'spiderr';

// searchHero( heroId, ( err, hero ) => {

//   if ( err ) {
//     console.error( 'Algo salio mal aqui..', err );
//     return;
//   }

//   console.log( 'Hero obtenido!', hero );
// } );


// searchHeroPromise( heroId ).then( result => {
//   console.log( 'En promesa ', result );
// } ).catch( err => {
//   console.error( err );
// } );

Promise.all( [ searchHeroPromise( heroId1 ), searchHeroPromise( heroId2 ) ] ).then( result => {
  console.log(result);
} ).catch( err => {
  console.error( err )
} ).finally( () => {
  console.log('Competado el promise all');
})
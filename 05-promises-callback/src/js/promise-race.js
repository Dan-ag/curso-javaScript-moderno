import {
  promiseSlow,
  promiseTypical,
  promiseFast
} from './js/promises';


promiseSlow.then( console.log );
promiseTypical.then( console.log );
promiseFast.then( console.log );

Promise
  .race( [
    promiseSlow,
    promiseTypical,
    promiseFast
  ] )
  .then( console.log )
  .catch( console.error );

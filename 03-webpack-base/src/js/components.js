import '../css/components.css';

export const hi = name => {

  console.log( 'Creating tag h1' );

  const h1 = document.createElement( 'h1' );

  h1.innerText = `Holaaa, ${ name }`;
  document.body.append( h1 );
}
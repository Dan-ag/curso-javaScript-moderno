import '../css/components.css';

export const hi = name => {

  const h1 = document.createElement( 'h1' );

  h1.innerText = `Holaaa, ${ name }`;
  document.body.append( h1 );
}
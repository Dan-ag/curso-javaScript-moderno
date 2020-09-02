const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=1';

const getJoke = async () => {

  try {
    const resp = await fetch( jokeUrl );

    if ( !resp.ok ) {
      return alert( 'No se pudo realizar la peticion' );
    }

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch ( error ) {
    throw error;
  }
};

const getUser = async () => {
  const resp = await fetch( urlUsers );
  const { data: users } = await resp.json();

  return users;
};

// Cloudinary
const cloudPreset = 'wpd5bgxu';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dkog/image/upload';

const loadFile = async ( file ) => {
  const formData = new FormData();
  formData.append( 'upload_preset', cloudPreset );
  formData.append( 'file', file );

  try {
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    } );

    if ( resp.ok ) {
      const cloudResp = await resp.json();
      console.log( cloudResp );
      return cloudResp;
    } else {
      throw await resp.json();
    }


  } catch ( error ) {
    throw error;
  }
};

export {
  getJoke,
  getUser,
  loadFile
};
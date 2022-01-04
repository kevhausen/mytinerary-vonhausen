import {GoogleLogin} from 'react-google-login';

function GoogleButton (){

    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
        <>
        
        <GoogleLogin
    clientId={process.env.GOOGLE_KEY}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
        </>
    )
    

}

export default GoogleButton
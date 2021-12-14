import {GoogleLogin} from 'react-google-login';

function GoogleButton (){

    const responseGoogle = (response) => {
        console.log(response);
      }

    return(
        <>
        
        <GoogleLogin
    clientId="190201580680-u46pho0n2vjalcan540tm22oan4vhc0v.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
        </>
    )
    

}

export default GoogleButton
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};
<GoogleLogin
  clientId="642706765191-tgauio5cntc5suvpfboomameum189cu4.apps.googleusercontent.com"
  buttonText="Login"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={"single_host_origin"}
/>;

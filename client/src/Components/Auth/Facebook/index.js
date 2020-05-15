import React from "react";
import FacebookLogin from "react-facebook-login";

function FacebookAuth() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = (response) => {
    console.log("from componentclicked", response);
  };
  return (
    <React.Fragment>
      <FacebookLogin
        appId="732372597253370"
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </React.Fragment>
  );
}

export default FacebookAuth;

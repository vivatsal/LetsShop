import React from "react";
import SignIn from "./Sign In/SignIn";
import Signup from "./SignUp/SignUp";
import "./SignInandSignUp.styles.css"

const SigninandSignup = () => {
    return(
       <div className="signin-signup">
          <SignIn />
          <Signup />
       </div>
    )
}

export default SigninandSignup;

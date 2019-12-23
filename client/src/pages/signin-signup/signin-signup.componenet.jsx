import React from "react";
import SignIn from "../../components/signin/signin.component.jsx";
import './signin-signup.styles.scss';
import SignUp from "../../components/signup/signup.component";

const SignInSignUp = () => {
  return (
    <div className="signin-signup">
    
      <SignIn className='SignIn' />
      <SignUp className='SignUp'/>
    </div>
  );
};

export default SignInSignUp;

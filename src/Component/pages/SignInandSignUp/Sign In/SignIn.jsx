import React from "react";
import FormInput from "../../FormInput/FormInput"
import "./SignIn.styles.css"
import CustomButton from "../../CustomButton/CustomButton"
import {auth, signInWithGoogle} from "../../../../firebase/firebase.utils"

class SignIn extends React.Component{
 constructor(){
   super();

   this.state = {email:"", password:""}

 }

  HandleSubmit = async event => {
      event.preventDefault();
 
      const { email, password } = this.state;

      try{ 
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:"",password:""});
      } catch(error){
        console.log("error", error);
      }
  
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

 render(){

     return(
         <div className="SignInpage">
             <div className="SignIn">
                      <h2>I already have a Account.</h2>
                      <span>Sign in with your email and password.</span>
               
               <form onSubmit={this.HandleSubmit}>

                  <FormInput
                     name='email'
                     type='email'
                     handleChange={this.handleChange}
                     value={this.state.email}
                     label='Email'
                     required
                  />

                  <FormInput
                     name='password'
                     type='password'
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='Password'
                     required
                  />

                  <CustomButton type="Submit" color="Black">SIGN IN</CustomButton>
                  <CustomButton onClick={signInWithGoogle} color="Blue">SIGN IN WITH GOOGLE</CustomButton>

               </form>

             </div>
          
         </div>

     ) 

 }

}

export default SignIn;
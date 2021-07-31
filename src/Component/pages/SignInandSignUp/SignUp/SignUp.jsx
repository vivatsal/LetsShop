import React from "react";
import FormInput from "../../FormInput/FormInput";
import { auth, createUserProfileDocument } from "../../../../firebase/firebase.utils" 
import "./SignUp.styles.css";

class Signup extends React.Component{

        constructor(){

            super();
            
            this.state = {displayName: "",
                          gmail: "",
                          password: "",
                          confirm_password: "" }

        }

        Handlesubmit = async event => {
            event.preventDefault();

            const {displayName, gmail, password, confirm_password } = this.state;

            if(password !== confirm_password){
                alert("Password and Confirm Password don't match.");
                return;
            }

            try{ 
               
                const {user} = await auth.createUserWithEmailAndPassword(gmail, password);

                await createUserProfileDocument(user, {displayName});

                this.setState({
                    displayName: "",
                    gmail: "",
                    password: "",
                    confirm_password: ""
                })

            } catch(error){
                console.log("error", error);
            }


        }

        Handlechange = event => {

            const{name, value} = event.target;
            this.setState({[name]: value})

        }

        render(){

            const { displayName, gmail, password, confirm_password } = this.state;

            return (

              <div className="signup-form" >

                <div className="account">
                      <h2>I don't have a Account.</h2>
                      <span>Sign up with your email and password.</span>
                  

                  <form className="form" onSubmit={this.Handlesubmit} >

                     <FormInput id="signup" type="text" name="displayName" label="Display Name" value={displayName} onChange={this.Handlechange} required />
                     <FormInput id="signup" type="email" name="gmail" label="Email" value={gmail} onChange={this.Handlechange} required />
                     <FormInput id="signup" type="password" name="password" label="Password" value={password} onChange={this.Handlechange} required />
                     <FormInput id="signup" type="password" name="confirm_password" label="Confirm Password" value={confirm_password} onChange={this.Handlechange} required />
                     <button id="signup-button" type="Submit">SIGN UP</button> 

                  </form>

                </div>

              </div>

            )
        }

}

export default Signup;
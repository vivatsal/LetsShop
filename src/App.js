import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import  Directory  from './Component/Directory/directory.component.jsx';
import  ShopPage from "./Shoppage/shoppage";
import Hatspage from "./Component/pages/Hatspage/hatspage"
import Header from "./Component/Header/header"
import {auth} from "./firebase/firebase.utils";
import {createUserProfileDocument} from "./firebase/firebase.utils"
import SigninandSignup from "./Component/pages/SignInandSignUp/SignInandSignUp"
import { setCurrentUser } from './redux/user/user.actions';
import store from "./redux/store";
import checkout from './Component/cart-dropdown/cart-checkout/checkout';

class App extends React.Component{

  unsubscribeFromAuth =  null;

  componentDidMount(){

  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {

    if (userAuth) {
     const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
              });
          }, 
          () => {  
            console.log(this.state);
          }
        );
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render(){ 
           return (
            <div className="App"> 
              <Header store={store} />
              <Switch>
                   <Route exact path="/LetsShop" component={Directory} />
                   <Route exact path="/homepage" component={ShopPage} />
                   <Route exact path="/homepage/hats" component={Hatspage} />
                   <Route exact path="/checkout" component={checkout} />
                   <Route exact path="/Signin" 
                      render={() => this.props.currentUser ?
                          (<Redirect to='/homepage'/>) : <SigninandSignup />
                      }
                   />
              </Switch>
            </div>
           );
    }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

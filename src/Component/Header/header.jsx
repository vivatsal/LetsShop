import "../Header/header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdwon from "../cart-dropdown/cart-dropdown";

const Header = ({currentUser, hidden}) => (
    <div className="header">
      <div className="logo-container">
       <Link className='logo-container' to='/LetsShop'>
          <Logo className='logo' />
       </Link>
      </div>
      <div className="head">
       <Link className="sign shop" to="/homepage">SHOP</Link>
       <Link className="sign shop" to="/LetsShop">CONTACT</Link>
       <div className="size">
          {currentUser ? (<div className="sign" onClick={()=>auth.signOut()}>SIGN OUT</div>) : (<Link to="/Signin" className="sign">SIGN IN</Link>) }
       </div>
       <CartIcon />
       {hidden ? null : <CartDropdwon />}
     </div>
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)

import React from 'react';
import {Link} from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/shop' className='option'>
        CONTACT
      </Link>
      { currentUser ? 
      <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div> : 
      <Link className='option' to='/signin'>Sign In</Link> }
      <CartIcon />
    </div>
    {hidden ? <CartDropdown /> : null} 

  </div>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
//   currentUser,
//   hidden
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
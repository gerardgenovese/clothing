import React from 'react';
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';


const Header = ({ currentUser }) => (
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
      <Link className='option' to='/signin'></Link> }
    </div>
  </div>
);

export default Header;
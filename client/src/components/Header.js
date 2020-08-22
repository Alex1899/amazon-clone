import React from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';


function Header() {
  const [{ basket, itemCount, user }, dispatch ] = useStateValue();
  console.log('itemCount: ', itemCount);
  const logout = () => {
      dispatch({type: 'LOGOUT_USER'});
  }

  return (
    <nav className="header">
        <Link to='/'>
            <img className="header__logo" 
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon logo' />
        </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className='header__searchIcon'/>
        </div>

        <div className="header__nav">
            <Link className='header__link' to={!user && '/login'}>
                <div  className="header__option">
                    <span className='header__optionLineone'>Hello {user?.displayName}</span>
                    <span onClick={ user && logout } className='header__optionLineTwo'>{user ? 'Sign out': 'Sign in'} </span>
                </div>
            </Link>

            <Link className='header__link' to='/'>
                <div className="header__option">
                    <span className='header__optionLineone'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>

            <Link className='header__link' to='/'>
                <div className="header__option">
                    <span className='header__optionLineone'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>

            <Link className='header__link' to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'> {itemCount} </span>
                </div>
            </Link>
        </div>
       
    </nav>
  );
}

export default Header;

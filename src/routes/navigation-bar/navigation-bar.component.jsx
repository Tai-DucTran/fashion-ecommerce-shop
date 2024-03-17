import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selectors';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  NavigationBarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation-bar.styles';

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutHandle = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandle}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

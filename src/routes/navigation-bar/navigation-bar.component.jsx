import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  selectCurrentUser,
  selectIsProfileCardOpen,
} from '../../store/user/user.selector';
import { setIsProfileCartOpen } from '../../store/user/user.action';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import ProfileCardContainer from '../profile-card/profile-card.component';

import {
  NavigationBarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation-bar.styles';

const NavigationBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileCardOpen = useSelector(selectIsProfileCardOpen);

  const onProfileClickHandler = () => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(!isCartOpen));
    }
    dispatch(setIsProfileCartOpen(!isProfileCardOpen));
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
            <NavLink as="span" onClick={onProfileClickHandler}>
              PROFILE
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {isProfileCardOpen && <ProfileCardContainer />}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;

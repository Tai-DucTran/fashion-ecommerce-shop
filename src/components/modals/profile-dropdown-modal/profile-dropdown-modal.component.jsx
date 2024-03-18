import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsProfileCartOpen } from '../../../store/user/user.action';
import { selectIsProfileCardOpen } from '../../../store/user/user.selector';

import {
  ProfileDropdownContainer,
  ProfileNavLinks,
  ProfileNavLink,
} from './profile-card.styles';
import { signOutUser } from '../../../utils/firebase/firebase.utils';

const ProfileDropdownModal = () => {
  const dispatch = useDispatch();
  const isProfileCardOpen = useSelector(selectIsProfileCardOpen);
  const signOutHandle = async () => {
    dispatch(setIsProfileCartOpen(!isProfileCardOpen));
    await signOutUser();
  };

  const modalRef = useRef(null);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(setIsProfileCartOpen(!isProfileCardOpen));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ProfileDropdownContainer ref={modalRef}>
      <ProfileNavLinks>
        <ProfileNavLink>Profile</ProfileNavLink>
        <ProfileNavLink>History Purchase</ProfileNavLink>
        <ProfileNavLink>Payment Method</ProfileNavLink>
        <ProfileNavLink as="span" onClick={signOutHandle}>
          Sign Out
        </ProfileNavLink>
      </ProfileNavLinks>
    </ProfileDropdownContainer>
  );
};

export default ProfileDropdownModal;

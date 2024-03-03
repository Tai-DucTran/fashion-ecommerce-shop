import { useSelector, useDispatch } from 'react-redux';
import { setIsProfileCartOpen } from '../../store/user/user.action';
import { selectIsProfileCardOpen } from '../../store/user/user.selector';

import {
  ProfileDropdownContainer,
  ProfileNavLinks,
  ProfileNavLink,
} from './profile-card.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const ProfileCardContainer = () => {
  const dispatch = useDispatch();
  const isProfileCardOpen = useSelector(selectIsProfileCardOpen);
  const signOutHandle = async () => {
    dispatch(setIsProfileCartOpen(!isProfileCardOpen));
    await signOutUser();
  };

  return (
    <ProfileDropdownContainer>
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

export default ProfileCardContainer;

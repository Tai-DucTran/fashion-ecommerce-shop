import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const setIsProfileCartOpen = (boolean) =>
  createAction(USER_ACTION_TYPES.SET_IS_PROFILE_CARD_OPEN, boolean);

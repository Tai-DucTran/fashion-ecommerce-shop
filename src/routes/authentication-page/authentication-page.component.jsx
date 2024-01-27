import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from './sign-up-form/sign-up-form.components';

const AuthenticationPage = () => {
  useEffect(() => {
    const verifyRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    };
    verifyRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default AuthenticationPage;

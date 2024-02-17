import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { SignInContainer, SignInButtonContainer } from './sign-in-form.style';

const defaultForm = {
  email: '',
  password: '',
};

const SignInForm = () => {
  useEffect(() => {
    const verifyRedirectResult = async () => {
      const response = await getRedirectResult(auth);
    };
    verifyRedirectResult();
  }, []);

  const [formFields, setFormFields] = useState(defaultForm);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultForm);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          alert('Something went wrong', error);
          break;
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <SignInButtonContainer>
          <Button chidren="Sign In"></Button>
          <Button
            type="button"
            onClick={signInWithGoogleRedirect}
            buttonType={BUTTON_TYPE_CLASSES.google}
            chidren="Sign In With Google"
          ></Button>
        </SignInButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

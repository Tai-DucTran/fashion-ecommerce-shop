import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.style.scss';

const defaultForm = {
  email: '',
  password: '',
};

const SignInForm = () => {
  useEffect(() => {
    const verifyRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocFromAuth(response.user);
        console.log(response);
      }
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
    console.log(event.target);

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log('login response', response);
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
    console.log(event.target);
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(name);
    console.log(value);
  };

  return (
    <div className="sign-in-container">
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

        <div className="sign-in-buttons-container">
          <Button chidren="Sign In"></Button>
          <Button
            type="button"
            onClick={signInWithGoogleRedirect}
            buttonType="google"
            chidren="Sign In With Google"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

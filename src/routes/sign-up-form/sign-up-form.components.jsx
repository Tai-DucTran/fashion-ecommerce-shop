import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultForm = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SiginUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultForm);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(event.target);

    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log(`user creation encountered an error`, error);
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SiginUpForm;

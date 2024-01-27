import './authentication.style.scss';
import SignUpForm from './sign-up-form/sign-up-form.components';
import SignInForm from './sign-in-form/sign-in-form.component';

const AuthenticationPage = () => {
  return (
    <div className="sign-in-sign-up-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthenticationPage;

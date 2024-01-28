import './authentication.style.scss';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  return (
    <div className="sign-in-sign-up-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

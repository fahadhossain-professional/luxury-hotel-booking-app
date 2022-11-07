import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import './SignUp.css';

const SignUp = () => {
  const { createPasswordBaseUser } = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState(null);
  const [alreadyUse, setAlreadyUse] = useState(null);

  const handleSubmitUserSignUpForm = (event) => {
    setPasswordError('');
    setAlreadyUse('');
    // Disable form default behavior
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 8) {
      setPasswordError('Your password should be at least 8 characters.');
      return;
    }
    if (password !== confirm) {
      setPasswordError('Your password and confirmation password do not match.');
      return;
    }

    createPasswordBaseUser(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAlreadyUse(errorMessage);
      });
  };

  return (
    <div className="container">
      <form className="w-50 m-auto border rounded-2 p-5 my-4" onSubmit={handleSubmitUserSignUpForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="confirm" className="form-control" id="exampleInputPassword1" />
        </div>
        <p className="text-danger">{passwordError}</p>
        <p className="text-danger">{alreadyUse}</p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="w-50 m-auto border rounded-2 p-5">
        <p className="text-center m-0">
          Have an account?
          {' '}
          <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

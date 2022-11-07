import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import './SignIn.css';

const SignIn = () => {
  const { passwordBaseUserSignIn } = useContext(AuthContext);

  const [wrongPassword, setWrongPassword] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmitUserSignInForm = (event) => {
    setWrongPassword('');
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    passwordBaseUserSignIn(email, password)
      .then((userCredential) => {
      // Signed in
        const { user } = userCredential;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setWrongPassword(errorMessage);
      });
  };

  return (
    <div className="container">
      <form className="w-50 m-auto border rounded-2 p-5 my-4" onSubmit={handleSubmitUserSignInForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <p className="text-danger">{wrongPassword}</p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="w-50 m-auto border rounded-2 p-5">
        <p className="text-center m-0">
          Don't have an account?
          {' '}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

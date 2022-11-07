import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/header-logo2.svg';
import { AuthContext } from '../../../context/UserContext';
import './NavBar.css';

const NavBar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container container-fluid">
        <a className="navbar-brand d-lg-none " href="/">
          <img src={Logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav">
              {user?.uid ? (
                <Link className="nav-link" onClick={userSignOut} to="/signin">
                  Sign out
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to="/signup">Sign up</Link>
                  <Link className="nav-link" to="/signin">Sign in</Link>
                </>
              )}
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import Logo from '../../../assets/images/header-logo2.svg';
import './NavBar.css';

const NavBar = () => {
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sign up</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

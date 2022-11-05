import Email from '../../../assets/icons/email.svg';
import Phone from '../../../assets/icons/phones.svg';
import Logo from '../../../assets/images/header-logo2.svg';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="d-none d-lg-block border-bottom">
      <div className="container d-flex justify-content-between align-items-center ">
        <div className="d-flex align-items-center">
          <img src={Phone} alt="" />
          <div className="custom-hotline-info">
            <span>Call Us Now</span>
            <h5>+880 179038597</h5>
          </div>
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex align-items-center">
          <img src={Email} alt="" />
          <div className="custom-email-info">
            <span>Email Now</span>
            <h5>example@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

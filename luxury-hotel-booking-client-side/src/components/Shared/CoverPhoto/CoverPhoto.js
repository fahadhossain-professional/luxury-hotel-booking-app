import BannerImage from '../../../assets/images/inner-banner.png';

const bannerStyle = {
  backgroundImage: `url(${BannerImage})`,
  height: 600,
  backgroundRepeat: 'no-repeat'
};

const CoverPhoto = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={bannerStyle}>
      {/* <div>
        <h2>Room & Suits 01</h2>
      </div> */}

    </div>
  );
};

export default CoverPhoto;

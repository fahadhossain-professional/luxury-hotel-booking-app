import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;

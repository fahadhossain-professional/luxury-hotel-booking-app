import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/Pages/About/About';
import Home from '../../components/Pages/Home/Home';
import SignIn from '../../components/Pages/SignIn/SignIn';
import SignUp from '../../components/Pages/SignUp/SignUp';
import Book from '../../components/Shared/Book/Book';
import Main from '../../layout/Main';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch('http://localhost:5000/rooms');
        },
        element: <Home />
      },
      {
        path: '/book/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/book/${params.id}`);
        },
        element: <PrivateRoutes><Book /></PrivateRoutes>
      },
      { path: '/about', element: <About /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> }
    ]
  }
]);

export default router;

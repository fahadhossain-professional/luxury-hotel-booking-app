import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/Pages/About/About';
import Home from '../../components/Pages/Home/Home';
import Book from '../../components/Shared/Book/Book';
import Main from '../../layout/Main';

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
        element: <Book />
      },
      { path: '/about', element: <About /> }
    ]
  }
]);

export default router;

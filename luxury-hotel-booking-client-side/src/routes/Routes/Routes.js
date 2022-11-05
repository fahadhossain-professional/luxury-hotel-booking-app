import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/Pages/About/About';
import Home from '../../components/Pages/Home/Home';
import Main from '../../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  }
]);

export default router;

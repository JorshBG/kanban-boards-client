import E404 from './pages/404/index.jsx'
import Landing from './pages/landing/index.jsx'
import SignUp from './pages/signup/index.jsx';
import SignIn from './pages/signin/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';

const routes = [
  {
    path: "/",
    element: <Landing />,
    errorElement: <E404 />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
    errorElement: <E404/>
  },
  {
    path: "/signin",
    element: <SignIn/>,
    errorElement: <E404/>
  },
  {
    path: "/signout",
    element: <Landing />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <E404 />
  },
];

export default routes;
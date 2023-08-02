import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/home/Home';
import AboutUs from './routes/about/AboutUs';
import Contact from './routes/contact/Contact';
import Members from './routes/members/Members';
import Events from './routes/events/Events';
import Error from './routes/error/Error';
import Admin from './routes/admin/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/members",
    element: <Members/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/*",
    element: <Error/>,
  },
  
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import WheelPage from './pages/WheelPage';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Wheel",
    element: <WheelPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
  <RouterProvider router={router} />
  </CookiesProvider>
)


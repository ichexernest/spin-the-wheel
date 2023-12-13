import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import WheelPage from './pages/WheelPage';

const router = createBrowserRouter([
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


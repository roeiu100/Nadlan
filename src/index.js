import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/Home/HomePage'
import InfoPage from './pages/info/InfoPage';
import ErrorPage from './pages/general/ErrorPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/assest",
    element: <InfoPage />,
    errorElement: <ErrorPage />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>
);


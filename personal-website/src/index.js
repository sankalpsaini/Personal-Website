import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  // Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './pages/Root';
import App from './App';
import Compiler from './pages/Compiler';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: `/`,
        element: <App />,
      },
      {
        path: `/compiler`,
        element: <Compiler />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

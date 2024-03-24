import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoadingScreen from './pages/loadingScreen';
import HomeScreen from './pages/homeScreen';
import LoginScreen from './pages/loginScreen';
import ProgressScreen from './pages/progressScreen';
import ActivityScreen from './pages/activityScreen';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/progess",
    element: <ProgressScreen />,
  },
  {
    path: "/activity",
    element: <ActivityScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

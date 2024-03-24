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
import { ClerkProvider } from '@clerk/clerk-react'
import ProgressScreen from './pages/progressScreen';
const PUBLISHABLE_KEY = "pk_test_dW5jb21tb24tdG9ydG9pc2UtNjguY2xlcmsuYWNjb3VudHMuZGV2JA";
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <RouterProvider router={router} />
  </ClerkProvider>
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

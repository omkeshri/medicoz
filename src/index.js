import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';

const Home = lazy(() => import("./Components/HomePage/Home"));
const Contact = lazy(() => import("./Components/ContactPage/Contact"));
const Transaction = lazy(() => import("./Components/TransactionPage/Transaction"));
const Doctor = lazy(() => import("./Components/DoctorPage/Doctor"));
const Shopping = lazy(() => import("./Components/ShoppingPage/Shopping"));
const Profile = lazy(() => import("./Components/ProfilePage/Profile"));
const Shimmer = lazy(() => import("./Components/ShimmerPage/Shimmer"));
const Error = lazy(() => import("./Components/ErrorPage/Error"));
const Services = lazy(() => import("./Components/ServicePage/Services"));
const App = lazy(() => import("./App"));
const LogIn = lazy(() => import("./Components/AuthPage/LogIn"));
const SignUp = lazy(() => import("./Components/AuthPage/SignUp"));

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Shimmer />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/doctor",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Doctor />
          </Suspense>
        ),
      },
      {
        path: "/shopping",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Shopping />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/transaction",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Transaction />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LogIn />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Shimmer />}>
        <Error />
      </Suspense>
    ),
  },
]);


root.render(
  <Provider store={appStore}>
  {/* <React.StrictMode> */}
      <RouterProvider router={appRouter} />
    {/* </React.StrictMode> */}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Blog from "../pages/Blog";
import Wrapper from "../layout/Wrapper";
import PageNotFound from "../pages/PageNotFound";
import AboutPage from "../pages/AboutPage";
import Shop from "../pages/Shop";
import ContactUs from "../pages/ContactUs";
import RegistrationPage from "../pages/RegistrationPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "pages",
        element: <AboutPage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "landing",
        element: <HomePage />,
      },
      {
        path: "pages/contactus",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);
export default Routes;

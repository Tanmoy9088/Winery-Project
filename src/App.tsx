// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import HeaderPage from "./layout/HeaderPage";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
import{ RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes"
// import PageNotFound from "./pages/PageNotFound";
// import FooterPage from "./layout/FooterPage";
import "./App.css"
function App() {
  return (
    // <>
    //   <BrowserRouter>
    //     <HeaderPage />
    //     <Routes>
    //       <Route path="/home" element={<HomePage />} />
    //       {/* <Route path="/header" element={<HeaderPage />} /> */}
    //       {/* <Route path="/about" element={<AboutPage />} /> */}
    //       <Route path="/notfound" element={<PageNotFound />} />
    //     </Routes>
    //     {/* <AboutPage /> */}
    //     <FooterPage />
    //   </BrowserRouter>

    //   {/* <HomePage /> */}
    // </>/
    <>
    <RouterProvider router={Routes}/>
    </>
  );
}

export default App;

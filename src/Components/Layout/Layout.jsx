import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../PagesComponents/Header/Header";
import Navigate from "../PagesComponents/Navigate/Navigate";
import Loader from "../PagesComponents/Loader/Loader";
import Footer from "../PagesComponents/Footer/Footer";

const Layout = () => {

  return (
    <div>
      <Header />
      <Navigate />
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

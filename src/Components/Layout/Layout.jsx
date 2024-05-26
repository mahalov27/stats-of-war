import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigate from "../Navigate/Navigate";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navigate />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

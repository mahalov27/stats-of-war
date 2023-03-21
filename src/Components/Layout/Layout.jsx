import { Outlet } from "react-router-dom";
import Header from "../PagesComponents/Header/Header";
import Navigate from "../PagesComponents/Navigate/Navigate";
import Footer from "../PagesComponents/Footer/Footer";

const Layout = () => {

  return (
    <div>
      <Header />
      <Navigate />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language/languageSlice";
import Header from "../PagesComponents/Header/Header";
import Navigate from "../PagesComponents/Navigate/Navigate";
import Footer from "../PagesComponents/Footer/Footer";

const Layout = () => {
  const dispatch = useDispatch();
  const actualityLanguage = localStorage.getItem("language");
  const defaultLanguage = "ua";

  useEffect(() => {
    dispatch(
      setLanguage(actualityLanguage ? actualityLanguage : defaultLanguage)
    );
  }, []);

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

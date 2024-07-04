import Header from "./header/Header";
import Footer from "./footer/Footer";
import ContentWrapper from "./ContentWrapper";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ContentWrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default Layout;

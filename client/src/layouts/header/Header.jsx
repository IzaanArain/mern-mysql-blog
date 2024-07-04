import Navigation from "../navigation/Navigation";
import BlogLogo from "../../assets/img/blog_logo.png";

const Header = () => {
  return (
    <>
      <header className="blog-header">
        <div className="container">
          <div className="logo">
            <img src={BlogLogo} alt="" />
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;

import Navigation from "../navigation/Navigation";
import BlogLogo from "../../assets/img/blog_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="blog-header">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <img src={BlogLogo} alt="" />
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;

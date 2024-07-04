import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <>
      <header className="blog-header">
        <div className="container">
          <div className="logo">
            <span>Izaan's Blog</span>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;

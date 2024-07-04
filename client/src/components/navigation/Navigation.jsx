import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="blog-nav">
        <Link className="blog-link" to={"/?cat=art"}>
          <h6>ART</h6>
        </Link>
        <Link className="blog-link" to={"/?cat=science"}>
          <h6>SCIENCE</h6>
        </Link>
        <Link className="blog-link" to={"/?cat=technology"}>
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="blog-link" to={"/?cat=cinema"}>
          <h6>CINEMA</h6>
        </Link>
        <Link className="blog-link" to={"/?cat=design"}>
          <h6>DESIGN</h6>
        </Link>
        <Link className="blog-link" to={"/?cat=food"}>
          <h6>FOOD</h6>
        </Link>
        <span>John</span>
        <span>Logout</span>
        <span className="add-link">
          <Link className="blog-link" to={"/add"}>
            Write
          </Link>
        </span>
      </nav>
    </>
  );
};

export default Navigation;

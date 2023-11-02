import { Link } from "react-router-dom";
import "../App.css";
import Logo from "./Logo";
import NavUser from "./NavUser";
const Nav = () => {
  return (
    <nav id="nav" className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Logo/>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex flex-column" id="navbarTogglerDemo02">
            <div ></div>
          <form className="d-flex w-75 my-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success"><i className="fa-brands fa-searchengin"></i></button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
            <Link to={"/"} className="nav-link active text-light fw-medium" >Trang chủ</Link>
            </li>
            <li className="nav-item">
            <Link to={"/macbook"} className="nav-link active text-light fw-medium" >Macbook</Link>
              
            </li>
            <li className="nav-item">
            <Link to={"/iphone"} className="nav-link active text-light fw-medium" >Iphone</Link>
              
            </li>
            <li className="nav-item">
            <Link to={"/watch"} className="nav-link active text-light fw-medium" >Apple Watch</Link>

            </li>
            <li className="nav-item">
            <Link to={"/others"} className="nav-link active text-light fw-medium" >Phụ kiện</Link>

            </li>
            <li className="nav-item">
              <Link to={"/news"} className="nav-link active text-light fw-medium" >Tin tức</Link>
                
            </li>
          </ul>
        </div>
        <NavUser/>
        
      </div>
    </nav>
  );
};

export default Nav;

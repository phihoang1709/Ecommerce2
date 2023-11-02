import { Link } from "react-router-dom";
const NavUser = () => {
  let totalProducts = 0;
  Object.entries(localStorage).map((e)=>{
    totalProducts += +e[1];
  });
  return (
    <div className="d-flex">
      <div className="btn-group m-1">
        
        <button
          type="button"
          className="rounded btn btn-light d-flex flex-column "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined mx-auto">
            account_circle
          </span>
          <span>Tài khoản</span>
        </button>
        <ul className="dropdown-menu rounded">
          <li>
          <Link to={"/login"} className="dropdown-item disabled text-dark">
              Nguyen Hoang
              <br />
              gmail@hoang.com
              </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to={"/account"} className="dropdown-item">
              Thông tin tài khoản
            </Link>

          </li>
          
          <li>
            <Link to={"/login"} className="dropdown-item bg-danger text-light">Đăng xuất</Link>
          </li>
        </ul>
      </div>
        <Link
          to={"/cart"}
          type="button"
          className="rounded btn btn-light d-flex flex-column m-1">
          <span className="span-bad position-absolute translate-middle badge rounded-pill bg-danger">
            {totalProducts}<span className="visually-hidden">unread messages</span>
          </span>
          <span className="material-symbols-outlined mx-auto">
            add_shopping_cart
          </span>
          <span>Giỏ hàng</span>
        </Link>
      
    </div>
  );
};

export default NavUser;

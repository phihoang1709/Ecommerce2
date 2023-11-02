import MessengerAdmin from "./MessengerAdmin";
import AlertsAdmin from "./AlertsAdmin";
import { Link } from "react-router-dom";
const NavAdmin = () => {
    const logoutConfirm = ()=>{
        if (confirm('Bạn có chắc muốn đăng xuất?')) {
            window.location.href = "/";
        }
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm ..."
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Tìm kiếm ..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1 ">
                    <button className="nav-link dropdown-toggle" id="alertsDropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        <span className="badge badge-danger badge-counter">3+</span>
                    </button>
                    <div className="dropdown-list dropdown-menu-lg-end dropdown-menu shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">Thông báo</h6>
                        <AlertsAdmin/>


                        <a className="dropdown-item text-center small text-gray-500" href="#">Hiện toàn bộ thông báo</a>
                    </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <button className="nav-link dropdown-toggle" id="messagesDropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">7</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-lg-end shadow animated--grow-in mr-3"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">Tin nhắn</h6>
                            <MessengerAdmin/>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>



                <li className="nav-item dropdown no-arrow">
                    <button id="userDropdown" type="button" className="btn dropdown-toggle dropdown-toggle-split mt-2" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                        <img style={{ width: "3rem", height: "2.5rem" }} className="img-profile rounded-circle"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg" />
                    </button>

                    <div className="dropdown-menu dropdown-menu-sm-end shadow animated--grow-in mr-3"
                        aria-labelledby="userDropdown">
                        <Link onClick={logoutConfirm}  className="dropdown-item text-bg-danger"  data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Đăng xuất
                        </Link>
                    </div>
                </li>

            </ul>

        </nav>
    );
}

export default NavAdmin;

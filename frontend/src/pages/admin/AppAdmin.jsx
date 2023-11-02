/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NavAdmin from "../../components/admin/NavAdmin";
import SideBarComponent from "../../components/admin/SideBarComponent";
import '../../admin.min.css';
import { Link } from "react-router-dom";

const AppAdmin = ({children}) => {
    
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setDate(new Date());
    }, [date]);
    const [toggled, setToggled] = useState(false);
    return (
        <div className="d-flex">
            <ul className={`${toggled ? 'toggled' : ''} navbar-nav bg-gradient-primary sidebar sidebar-dark accordion`} id="accordionSidebar">

                <p className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-text mx-3">Xin chào Admin</div>
                </p>
                    <p className="mx-4 text-light nav-item">{date.toUTCString()}</p>
                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to={'/admin'}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Bảng điều khiển</span></Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Thuộc tính
                </div>

                <SideBarComponent title="Tài khoản người dùng" page="useradmin"/>
                <SideBarComponent title="Loại sản phẩm" page="categoryadmin"/>
                <SideBarComponent title="Sản phẩm" page="productadmin"/>
                <SideBarComponent title="Bình luận" page="commentadmin"/>
                <SideBarComponent title="Tin tức" page="newsadmin"/>
                <SideBarComponent title="Đơn hàng" page="orderadmin"/>
                <hr className="sidebar-divider" />

                <div className="text-center d-none d-md-inline">
                    <button onClick={() => setToggled(!toggled)} className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>

            <div id="content-wrapper" className="d-flex flex-column container-fluid">
                <NavAdmin />
                <div className="row">
                    {children}
                </div>
            </div>

        </div>
        
    );
}

export default AppAdmin;


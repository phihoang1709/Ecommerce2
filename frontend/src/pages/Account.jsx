import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Account = () => {
    return (
        <>
        <Nav/>
        
        <div className="container-fluid mt-3">
            <h1 className="mb-4">Xin chào bro</h1>
            <Link to={"/admin"} className="btn btn-warning">Admin</Link>
            <div id="sec-2-content" className="container-fluid mt-1">

                <form action="" method="POST" encType="multipart/form-data">
                    <div className="row">
                        <img name="user_img" src="/src/assets/admin.png" alt="" className="col-lg-5 col-md-5 col-sm-10" />
                        <div className="col-lg-5 col-md-5 col-sm-10 p-5">

                            <h5>Ảnh đại diện : </h5><input type="file" name="img" value="" />
                            <h5>Họ tên : </h5><input className="form-control" name="name" type="text" value="name" />

                            <h5>Số điện thoại : </h5><input className="form-control" name="phone" type="text" value="123" />
                            <h5>Email : </h5><input className="form-control" name="email" type="text" value="@mail" />
                            <h5>Mật khẩu : </h5><input className="form-control" name="password" type="password" value="" required />
                            <h5>Nhập lại mật khẩu : </h5><input className="form-control" name="re-password" type="password" value="123" required />
                            <br />
                            <input type="submit" name="change" className="btn btn-info mt-3" value="Lưu thay đổi" />
                        </div>
                    </div>

                    <Link to={"/"} class="form-control btn btn-danger" role="button">Đăng xuất</Link>
                </form>

            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Account;

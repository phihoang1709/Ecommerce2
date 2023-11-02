import Logo from "../components/Logo";
import { useState } from "react";
const Register = () => {
  const [accept, setAccept] = useState(true);
  return (
    <form className="p-5" action="" method="POST">
      <h1>Đăng ký</h1>
      <div className="form-group">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-10 p-5">
            <h5>Họ và Tên</h5>
            <input type="text" name="name" id="" className="form-control my-2"
              placeholder="Vui lòng nhập họ tên" required />
            <h5>Email</h5>
            <input type="mail" name="email" id="" className="form-control my-2"
              placeholder="Vui lòng nhập email" required />
            <h5>Số điện thoại</h5>
            <input type="number" name="phone" id="" className="form-control my-2"
              placeholder="Vui lòng nhập số điện thoại" minLength="10" maxLength="11" required />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-10 p-5">
            <h5>Tài khoản</h5>
            <input type="text" name="username" id="" className="form-control my-2"
              placeholder="Vui lòng nhập tài khoản" minLength="4" maxLength="20" required />
            <h5>Mật khẩu</h5>
            <input type="password" name="password" id="" className="form-control my-2"
              placeholder="Vui lòng nhập mật khẩu" minLength="4" maxLength="20" required />
            <h5>Nhập lại mật khẩu</h5>
            <input type="password" name="re-password" id="" className="form-control my-2"
              placeholder="Vui lòng nhập lại mật khẩu" minLength="4" maxLength="20" required />
            <input onClick={() => setAccept(!accept)} type="checkbox" name="" id="check" className="my-2" />
            Tôi đã đọc và đồng ý với
            <a type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              điều khoản sử dụng
            </a>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Điều khoản sử dụng</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body ">
                    <Logo/>
                    <ul>
                      <li><b>1.Đăng ký tài khoản:</b> Người dùng phải cung cấp thông tin chính xác và đầy đủ khi đăng ký tài khoản. Tài khoản chỉ được sử dụng cho mục đích cá nhân và không được chia sẻ cho bất kỳ ai khác.</li>
                      <li><b>2.Bảo mật tài khoản:</b> Người dùng phải giữ bảo mật thông tin đăng nhập của mình và không được chia sẻ với bất kỳ ai khác. Người dùng phải chịu trách nhiệm về các hoạt động được thực hiện trên tài khoản của mình.</li>
                      <li><b>3.Sản phẩm và giá cả:</b> Trang web cung cấp các sản phẩm của Apple với giá cả được niêm yết rõ ràng. Giá cả có thể thay đổi tùy thuộc vào từng sản phẩm và thời điểm.</li>
                      <li><b>4.Thanh toán và vận chuyển:</b> Người dùng phải thanh toán đầy đủ giá cả và các phí vận chuyển khi đặt hàng. Trang web sẽ cung cấp thông tin chi tiết về các phương thức thanh toán và chính sách vận chuyển.</li>
                      <li><b>5.Bảo hành và đổi trả:</b> Các sản phẩm được bảo hành theo chính sách của Apple. Người dùng có thể yêu cầu đổi trả sản phẩm trong vòng 30 ngày kể từ ngày mua hàng.</li>
                      <li><b>6.Chính sách bảo mật:</b> Trang web cam kết bảo vệ thông tin cá nhân của người dùng và tuân thủ các quy định về bảo mật thông tin.</li>
                      <li><b>7.Thay đổi điều khoản:</b> Trang web có quyền thay đổi điều khoản sử dụng mà không cần thông báo trước. Người dùng nên kiểm tra lại điều khoản sử dụng thường xuyên để cập nhật các thay đổi mới nhất.</li>
                      <li><b>8.Giải quyết tranh chấp:</b> Mọi tranh chấp liên quan đến việc sử dụng trang web sẽ được giải quyết theo quy định của pháp luật Việt Nam.</li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Đã hiểu</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <input disabled={accept} id="submitt" type="submit" name="submitRegister" className="btn btn-danger mb-3" value="Đăng ký" />
        </div>
      </div>
    </form>
  );
}

export default Register;

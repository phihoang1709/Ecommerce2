import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div id="" className="container-fluid " style={{ backgroundColor: "#4158D0",backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",height:"auto"}} >
        <div className="d-grid align-items-center justify-content-center" >
            <div className="row align-items-center" style={{backgroundColor: "white", width:"80%", marginLeft:"10%", marginTop: "15vh", marginBottom: "20vh", height:"auto", borderRadius: "20px"}}>
            <img className="col-lg-6 col-md-6 col-sm-10" src="/src/assets/iPhone14-Purple-1.jpeg" alt="" />
            <form className="col-lg-5 col-md-5 col-sm-10 p-5 needs-validation" action="" method="post">
                <h1>Đăng nhập</h1>
                <div className="form-group">
                    <h5>Tài khoản</h5>
                    <input type="text" name="username" id="validationCustom01" className="form-control my-2" placeholder="Vui lòng nhập tài khoản" required/>
                    
                    <h5>Mật khẩu</h5>
                    
                    <input type="password" name="password" id="" className="form-control my-2" placeholder="Vui lòng nhập mật khẩu" required/>
                    <Link to={"../forgotPassword"}>Bạn quên mật khẩu</Link> 
                </div>
            
                <input type="submit" name="login" className="btn btn-danger mb-3" value="Đăng nhập"/>
                
                <p>Bạn chưa có tài khoản ? <Link to={"../register"}>Đăng ký ngay</Link></p>
            </form>
           
            </div>
        </div>
    </div>
    );
}

export default Login;

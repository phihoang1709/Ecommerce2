import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <div style={{height : "100vh"}} className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <img style={{ width: "60%" }} src="/src/assets/error.png" />
            <h1 className="fw-bold">Trang không tồn tại !</h1>
            <Link to={"/"} className="btn btn-danger mt-1" role="button">Quay trở lại</Link>
        </div>
    );
}

export default PageNotFound;

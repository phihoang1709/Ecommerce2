import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const News = () => {
    return (
        <>
        <Nav/>
        <div  className="container-fluid mt-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Trang chủ</Link></li>
                    <li className="breadcrumb-item active">Tin tức</li>
                </ol>
            </nav>


            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                    <Link to={"newDetail"} className="card-title link-underline-opacity-0 link-underline">
                        <div className="card d-flex flex-row mt-3">
                            <div className="card-header">
                            <img style={{width:"10rem"}} src="/src/assets/admin.png" />
                            </div>
                            <div className="card-body">
                                <h4>Title</h4>
                                <p><i className="fa-regular fa-alarm-clock"></i>Date yyyy-mm-dd</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6">

                    <div className="card">
                        <div className="card-header">
                            <h5>Tin nhanh</h5>
                        </div>
                        <div className="card-body">

                            <Link to={"newDetail"} className="card-title link-underline-opacity-0 link-underline pt-1">

                                <div className="card d-flex flex-row mt-3">
                                    <div className="card-header">
                                        <img style={{ width: "4rem" }} src="/src/assets/admin.png" />
                                    </div>
                                    <div className="card-body">
                                        <h5>Title</h5>
                                        <p><i className="fa-regular fa-alarm-clock"></i> Date</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default News;

import Breadcrumb from "../components/Breadcrumb";
import Comments from "../components/Comments";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { config } from "../config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const checkCate = (id)=>{
    if(id >= 100 && id < 200){
        return ["macbook", "Macbook"];
    }else if(id >= 200 && id < 300){
        return ["iphone","Iphone"]
    }else if (id >= 300 && id < 400){
        return ["watch", "Apple Watch"];
    }else{
        return ["others", "Phụ kiện"]
    }
}
const ProductDetail = () => {
    const [values, setValues] = useState([]);
    const {id} = useParams();
    const [amount, setAmount] = useState(0);

    console.log(id);
    
    useEffect(function(){
        const fetchValues = async function(){
            const res = await fetch(`${config.url}/products/${id}`);
            const data = await res.json();
            setValues(data);
        };
        fetchValues();
    },[]);
    console.log(values);
    const [path, title] = checkCate(values.cate_id);
    localStorage.setItem(`${id}`,amount);

    // useEffect(function(){
    // }, [amount])
    return (
<>
<Nav/>

        <div className="container pb-5">
            <div  className="container-fluid mt-5">
            <Breadcrumb parrents={[{link: "/", name: "Trang chủ"},{link: `../${path}`, name: `${title}`}]} child={values.title}/>

                <div id="sec-2-content" className="container-fluid mt-1">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <img src={`/src/assets/${values.image}`} className="d-block w-100 img-slider" alt="..." />
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <h4 className="">{values.title}</h4>
                            <p className="card-text">
                                {values.ram} - {values.cpu} - {values.rom}
                                –
                                NEW
                            </p>
                            <del>
                                {values.price} $
                            </del>
                            <p className="fs-4 text-danger fw-bold">
                                {values.price_sale} $
                            </p>
                            <div>
                                <p><i className="fa-solid fa-hand-point-up fa-rotate-90" style={{color: "#218656"}}></i> Sản
                                    phẩm
                                    chính hãng Apple mới
                                    100% nguyên seal</p>
                                <p><i className="fa-solid fa-hand-point-up fa-rotate-90" style={{color: "#218656"}}></i> Giá đã
                                    bao
                                    gồm VAT</p>
                                <p><i className="fa-solid fa-hand-point-up fa-rotate-90" style={{color: "#218656"}}></i> Bảo
                                    hành
                                    12 tháng</p>
                                <p><i className="fa-solid fa-hand-point-up fa-rotate-90" style={{color: "#218656"}}></i> Giảm
                                    giá
                                    10% khi mua phụ kiện
                                    kèm theo</p>
                            </div>
                            <div className="border p-4">

                                <p><i className="fa-solid fa-gear" style={{color: "red"}}></i> Bộ xử lý CPU:
                                    {values.cpu} chip with
                                    8‑core CPU, 8‑core GPU, 16‑core Neural Engine
                                </p>
                                <p><i className="fa-solid fa-gear" style={{color: "red"}}></i> Bộ nhớ RAM:
                                    {values.ram} unified memory
                                </p>
                                <p><i className="fa-solid fa-gear" style={{color: "red"}}></i> Ổ cứng:
                                    {values.rom} SSD storage
                                </p>
                                <p><i className="fa-solid fa-gear" style={{color: "red"}}></i> Màn hình:
                                        {values.display} InchLiquid Retina
                                    display with True Tone
                                </p>
                                <p><i className="fa-solid fa-gear" style={{color: "red"}}></i> Card màn hình:
                                {values.display_card} Reitina
                                </p>
                            </div>
                            <div className="mt-3 d-grid gap-2">
                                <button onClick={() => setAmount(amount+1)} className="btn btn-danger"><i className="fa-sharp fa-solid fa-cart-shopping"></i>
                                    Mua
                                    ngay</button>
                                <button href="#" className="btn btn-success"><i className="fa-solid fa-phone"></i> Liên hệ</button>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="card-title link-underline-opacity-0 link-underline">
                                <div className="card">
                                    <div className="card-header">
                                        Chính sách bán hàng
                                    </div>
                                    <div className="card-body">
                                        <p><i className="fa-solid fa-check" style={{color: "#218656"}}></i> Dùng thử 10 ngày miễn
                                            phí
                                            đổi máy. (Macbook Like New)</p>
                                        <p><i className="fa-solid fa-check" style={{color: "#218656"}}></i> Lỗi 1 Đổi 1 trong 30
                                            ngày
                                            đầu. (Macbook Like New)</p>
                                        <p><i className="fa-solid fa-check" style={{color: "#218656"}}></i> Giao hàng tận nhà toàn
                                            quốc
                                        </p>
                                        <p><i className="fa-solid fa-check" style={{color: "#218656"}}></i> Thanh toán khi nhận
                                            hàng
                                            (nội thành)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5">
                <h3 className="mt-5 mb-4">Thông số kỹ thuật</h3>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Bộ xử lý CPU:</th>
                            <td>
                                {values.cpu} chip with
                                8‑core CPU, 8‑core GPU, 16‑core Neural Engine
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">Bộ nhớ RAM:</th>
                            <td>
                                {values.ram} ram unified memory
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Màn hình:</th>
                            <td>{values.display} Liquid Retina
                                display with True Tone
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Card màn hình:</th>
                            <td>
                            {values.display_card}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Ổ cứng:</th>
                            <td>
                            {values.rom} SSD storage
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Kích thước và trọng lượng:</th>
                            <td>{values.weight}</td>
                        </tr>
                        <tr>
                            <th scope="row">Camera:</th>
                            <td>
                            {values.camera} FaceTime HD camera
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="sec-4" className="mx-5 d-flex flex-column">
                <h3 className="mt-5 mb-4">Mô tả sản phẩm</h3>
                <img src={`/src/assets/${values.image}`} style={{ width: "30rem" }} alt="" />
                Detail
            </div>
            <h3 className="mt-5 mb-4 m-5">Bình luận</h3>
            <div style={{width: "90%"}} className="d-block mx-auto">
                <Comments value={values}/>
                
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default ProductDetail;

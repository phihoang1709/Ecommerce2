/* eslint-disable react/prop-types */
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProuductCheck from "../components/ProuductCheck";
import Breadcrumb from "../components/Breadcrumb";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { config } from "../config";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const getCate = (cateName)=>{
    if(cateName === "/macbook"){
        return [100, 200];
    }else if(cateName === "/iphone"){
        return [200, 300];
    }else if(cateName === "/watch"){
        return [300, 400];
    }else{
        return [400, 500];
    }
}
const AllProductsPage = (props) => {
    const [values, setValue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cateName = useLocation().pathname;
    const [min, max] = getCate(cateName);

    const properties = [
        {
            title: "CPU",
            contents: ["Intel Core i5", "Intel Core i7", "Intel Core i9", "Apple M1", "Apple M2"]
        },
        {
            title: "Kích thước màn hình",
            contents: ["13 inch", "14 inch", "16 inch"]
        },
        {
            title: "Dung lượng RAM",
            contents: ["8GB", "16GB", "32GB", "64GB"]
        },
        {
            title: "Dung lượng ổ cứng",
            contents: ["256GB", "512GB", "1TB", "2TB"]
        },
        {
            title: "Giá tiền",
            contents: ["400$ - 600$", "600$ - 800$", "800$ - 1000$", "Trên 1000$"]
        }
    ];



    useEffect(function () {
        const fetchValues = async function () {
            setIsLoading(true);
            const res = await fetch(`${config.url}/products`);
            const data = await res.json();
            setValue(data);
            setIsLoading(false);
        };
        fetchValues();
    }, []);
    console.log([min,max]);
    return (
        <>
        <Nav/>
        {isLoading && (<Loading/>) }
        <div className={`${isLoading ? 'loading' : ''}`+"container-fluid mt-5"}>
        
            <h1 className="mb-3">{props.title}</h1>
            <Breadcrumb parrents={[{ link: "/", name: "Trang chủ" },]} child={props.title} />

            <div id="sec-2-content" className="container-fluid mt-1">
                <div className="row mt-2">
                    <div className="col-lg-12 col-md-3 col-sm-2">

                        <div id="selectOption" className="form-check">
                            <div className="d-flex">
                                {properties.map((property) => {
                                    return (<ProuductCheck key={property.id} title={property.title} properties={property.contents} />);
                                })}

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-12 col-md-9 col-sm-10">
                        <ProductList>

                            {values.filter((value)=> (value.cate_id >= min)&&(value.cate_id < max)).map((value) => {
                                
                                return (<Product key={value._id} value={value} />)
                            })}

                            <div className="btn active btn-danger btn-lg my-5">Hiện thêm sản phẩm</div>
                        </ProductList>
                    </div>
                </div>
            </div>


            <div id="sec-4" className="mx-3">
                <p className="fw-bold">Tính bảo mật cao</p>
                <p>Có một điều không thể chối cãi, đó là Windows dù là hệ điều hành phổ biến nhất nhưng độ bảo mật không cao như
                    Mac OS. Một máy tính Mac không cài đặt phần mềm bảo mật nào nhưng ít có nguy cơ bị virus hay malware tấn
                    công so với máy tính Windows. Apple cho biết họ luôn cập nhật các loại mã hóa và bảo mật mới trong các phiên
                    bản Mac OS mới để đảm bảo an toàn. Đây cũng được coi là ưu điểm nổi trội của Macbook so với những dòng máy
                    tính xách tay khác.

                </p>
                <p className="fw-bold">Thời lượng pin “khủng”</p>
                <p>Thông thường các dòng Macbook luôn sở hữu thời gian sử dụng pin rất trâu. Đặc biệt là các dòng MacBook Air,
                    thời lượng pin sử dụng có thể lên đến 10 giờ sử dụng. Thậm chí nếu được sử dụng đúng cách thì tuổi thọ pin
                    của các dòng Macbook cũ cách đây vài năm cũng không bị hao mòn nhiều

                </p>
                <p className="fw-bold">Giá thành hơi cao nhưng vẫn hợp lý
                </p>
                <p>Khi nhắc đến MacBook, người dùng thường băn khoăn về giá thành của nó. Một chiếc MacBook mới thường dao động
                    trong quãng giá từ 30 đến 50 triệu. Với thu nhập trung bình của người Việt hiện tại, quyết định sở hữu một
                    chiếc Mac không phải điều dễ dàng. Nhưng để có 1 chiếc máy tính với vô số ưu điểm như vậy thì cũng là mức
                    giá xứng đáng.
                </p>
                <img src="/src/asset/iPhone14-Purple-1.jpeg" alt="" />
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default AllProductsPage;

import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartProduct from "../components/CartProduct";
import Database from "../Database";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect,useState } from "react";
const Cart = () => {

    let arr = [];
    // Database(0).forEach((val)=> {
    //     console.log(val);
    //     Object.keys(localStorage).forEach((key)=>{
    //         if((val.id) == key){
    //             let obj = { 
    //                 info :val,
    //                 amount: localStorage.getItem(val.id)
    //             }
    //             arr.push(obj);
    //         }
    //     })
    // });
   
    console.log(Database(1));
    
    return (
        <>
        <Nav/>
        <div id="sec-2" className="container-fluid mt-5">
            <Breadcrumb parrents={[{ link: "/", name: "Trang chủ" },]} child={"Giỏ hàng"} />

            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-6">
                    {arr.map((value)=>{
                        return (<CartProduct key={value.info.id} value={value.info} amount={value.amount}/>)
                    })}
                <CartProduct value={1} amount={1}/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">

                    <div className="card">
                        <div className="card-header">
                            <h5>Thông tin giao hàng</h5>
                        </div>
                        <div className="card-body">

                            <div className="card d-flex flex-row mt-3">
                                <div className="card-body">
                                    <h5>Tên khách hàng : </h5>
                                    <p>Email : </p>
                                    <p>Số điện thoại : </p>
                                    <h5 className="fw-bold text-danger">Thành tiền :  $</h5>
                                </div>

                            </div>

                            <Link onClick={() => alert("Đặt hàng thành công")} to={"/"} className="btn btn-danger mt-3" role="button" >Đặt hàng</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Cart;

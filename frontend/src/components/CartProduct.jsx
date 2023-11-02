/* eslint-disable react/prop-types */
import { useState } from "react";
const CartProduct = (props) => {
    const [amount, setAmount] = useState(props.amount);
    localStorage.setItem(props.value.id,amount);
    if (amount === 0) {
        setAmount(1);
    }
    function delCartProduct(id){
        localStorage.removeItem(id);
    }
    return (
        <div className="card-title link-underline-opacity-0 link-underline">
            <div className="card d-flex flex-row mt-3 justify-content-evenly">
                <div className="card-header">
                    <img style={{ width: "10rem" }} src='/src/assets/applewatch.jpeg' />
                    {/* <img style={{ width: "10rem" }} src={`/src/assets/${props.value.image}`} /> */}
                </div>
                <div style={{width:"200%"}} className="card-body">
                    <h4>{props.value.title}</h4>
                    <p className="text-danger fw-bold">{props.value.price_sale * amount} $</p>
                    <p className="fw-bold">Số lượng : <button className="rounded-circle btn btn-primary m-1" onClick={() => setAmount(amount - 1)}> - </button>  {amount}  <button className="rounded-circle btn btn-primary m-1" onClick={() => setAmount(Number(amount)+1)}> + </button>
                    </p>
                </div>
                <button onClick={()=>delCartProduct(props.value.id)} className="h-25 rounded-2 btn btn-danger m-3">X</button>
            </div>
        </div>
    );
}

export default CartProduct;

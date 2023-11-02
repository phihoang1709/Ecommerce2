/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Product = (props) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 p-2'>
            <Link to={`/product/${props.value._id}`} className='card-title link-underline-opacity-0 link-underline'>
                <div className='card'>
                    <img style={{ height: '15rem' }} src={`/src/assets/${props.value.image}`} className='card-img-top' />
                    <div className='card-body'>
                        <h5>{props.value.title}</h5>
                        <p className='card-text'>{props.value.cpu} {props.value.display} {props.value.ram} {props.value.rom}</p>
                        <span className='badge text-bg-warning'>Đã bán: {props.value.purchase}</span>
                        <del> {props.value.price} $</del>
                        <p className='fs-5 text-danger fw-bold'> {props.value.price_sale} $</p>

                        <a href='' className='btn btn-outline-danger mt-1'><span
                            className='material-symbols-outlined'>
                            add_shopping_cart
                        </span> Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product;

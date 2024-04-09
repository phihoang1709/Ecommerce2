import HomePageSideBar from "../components/HomePageSideBar";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { config } from "../config";
import { useState, useEffect } from "react";
const HomePage = () => {
    const [values, setValue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function(){
        const fetchValues = async function(){
            setIsLoading(true);
            const res = await fetch(`${config.url}/product`);
            const data = await res.json();
            setValue(data);
            setIsLoading(false);
        };
        fetchValues();
    },[]);
    console.log(values[0]);
    return (
        <>
      <Nav/>
      {isLoading && (<Loading/>) }
        <div className={isLoading ? `loading` : ''}>
            
            <div className="row">
                <HomePageSideBar />
                <Carousel />
            </div>
            <h1 className="m-5">Sản phẩm bán chạy</h1>
            <ProductList>
                {values.map((value)=>{
                    return (<Product key={value._id} value={value}/>)
                })}
                
            </ProductList>
        </div>
        <Footer/>
        </>
    );
};

export default HomePage;

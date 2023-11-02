/* eslint-disable react/prop-types */
const ProductList = ({children}) => {
    return (
        
        <div className='container-fluid mt-5'>
            <div className='row'>
                {children}
            </div>
        </div>
    
    );
}

export default ProductList;

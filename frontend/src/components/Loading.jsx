const Loading = () => {
    return (
        <div style={{transform : "translateX(-50%)"}} className="z-1 d-flex text-light-subtl flex-column position-fixed start-50 text-ligh">
            <div className="spinner-border " style={{width: "10rem", height: "10rem", fontSize: "5rem"}} role="status">
            <span className="visually-hidden ">Loading...</span>
        </div> 
        <h1>Loading ...</h1>
        
        </div>
        
    );
}

export default Loading;

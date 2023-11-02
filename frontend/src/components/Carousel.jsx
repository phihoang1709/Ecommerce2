import { useRef, useEffect } from "react";
const Carousel = () => {
    const nextButtonRef = useRef(null);
    useEffect(() => {
        setInterval(() => {
          nextButtonRef.current.click();
        }, 6000);
      }, []);
      
    return (
        <div id="main" className="col-md-9">
            <div id="carouselExampleIndicators" className="carousel slide mt-4">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/src/assets/macbook.jpeg" className="d-block w-100 img-slider" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/macbook1.jpeg" className="d-block w-100 img-slider" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/src/assets/macbook2.jpeg" className="d-block w-100 img-slider" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button ref={nextButtonRef} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;

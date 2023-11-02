/* eslint-disable react/prop-types */
const ParrentChartAdmin = ({ children, title }) => {
    return (
        <div className="col-xl-6 col-lg-6">

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                </div>
                <div className="card-body">
                    <div className="chart-area mb-5 container-fluid">
                        {children}
                    </div>
                    <hr/>

                </div>
            </div>
            </div>
            );      
}

export default ParrentChartAdmin;

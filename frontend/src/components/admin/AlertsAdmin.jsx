const AlertsAdmin = () => {
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="mr-3">
                <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">December 11, 2023</div>
                <span className="font-weight-bold">Em ăn cơm chưa!</span>
            </div>
        </a>
    );
}

export default AlertsAdmin;

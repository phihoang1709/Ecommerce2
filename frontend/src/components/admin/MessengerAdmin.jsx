const MessengerAdmin = () => {
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                    alt="..." />
                <div className="status-indicator bg-success"></div>
            </div>
            <div className="font-weight-bold">
                <div className="text-truncate">Hi Bro</div>
                <div className="small text-gray-500">Ban Hoang Giau Ten · 58m</div>
            </div>
        </a>
    );
}

export default MessengerAdmin;

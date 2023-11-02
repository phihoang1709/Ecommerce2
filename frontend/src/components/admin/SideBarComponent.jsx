/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SideBarComponent = (props) => {
    return (
        <Link className="nav-item" to={`/${props.page}`}>
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>{props.title}</span>
            </a>
        </Link>
    );
}

export default SideBarComponent;

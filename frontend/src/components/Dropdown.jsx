import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  return (
    <div className="btn-group dropend">
        <button type="button" className="btn btn-light btn-lg dropdown-toggle rounded-0 btn-hover"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i className={props.icon}></i> {props.title}
        </button>
        <ul className="dropdown-menu">
            {props.items.map((item)=>{
                return (
                    
                    <li key={item}><Link className="dropdown-item" to={props.link}>{item}</Link></li>
                );
            })}
            
        </ul>
    </div>
  );
};

export default Dropdown;

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Breadcrumb = (props) => {
    return (
        <nav aria-label="breadcrumb" className="bg-body-secondary rounded">
            <ol className="breadcrumb p-3">
                {props.parrents.map((parrent)=>{
                    return (<li key={parrent} className="breadcrumb-item"><Link to={parrent.link}>{parrent.name}</Link></li>);
                })}
                <li className="breadcrumb-item active" aria-current="page">{props.child}</li>
            </ol>
        </nav>
    );
}

export default Breadcrumb;

/* eslint-disable react/prop-types */
const ProuductCheck = (props) => {
    return (
        <div className="dropdown m-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.title}
            </button>
            <ul className="dropdown-menu">
                {props.properties.map((property) => {
                    return (
                        <li className="form-check m-3" key={property}>
                            <input className="form-check-input" type="checkbox" value="" id="cpu1"/>
                            <label className="form-check-label" htmlFor="cpu1">
                                {property}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProuductCheck;

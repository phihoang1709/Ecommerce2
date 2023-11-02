import { useState, useEffect } from "react";
import { config } from "./config";
const Database = (id) => {
    const [values, setValues] = useState([]);
    let path = `${config.url}/${id}`;
    if(id == 0){
        path = `${config.url}`;
    }
    useEffect(function(){
        const fetchValues = async function(){
            const res = await fetch(path);
            const data = await res.json();
            setValues(data);
        };
            fetchValues();   

    },[]);
    return values;
}
export default Database;


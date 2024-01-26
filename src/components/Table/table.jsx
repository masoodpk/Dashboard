import React, { useEffect, useState } from "react";
import axios from "axios";

import "./table.css";

const apiUrl = '';

function Table(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/table")
        .then(res => setData(res.data));
    },[]);

    return(

     <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
    )
}








export default Table;


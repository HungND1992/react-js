import React from 'react';
import { Link } from "react-router-dom";

function MenuItem ({ id, image, name, price }) {
    return (
        <div className="menuItem">
            <Link to={{ pathname:`/menu/${id}/item`, item:{ id, image, name, price } }}>
                <img src={image} alt="ITEM" />
                <h2>{ name }</h2>
                <p>{ price }</p>
            </Link>
        </div>
    )
}

export default MenuItem;
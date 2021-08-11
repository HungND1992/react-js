import React from 'react';
import '../styles/MenuItemDetail.css';

function MenuItemDetail(props) {
    const { image, name, price } = props.location.item;

    return (
        <div className="menuItemDetail">
            <div className="menuItemDetail_list">
                <div className="img">
                    <img src={image} alt="IMG" />
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuItemDetail

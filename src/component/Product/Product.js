import React, { useEffect, useState } from "react";
import './Product.css'

const Product = (props) => {
   const {name, description, img} = props.product;
   console.log(props);
    return(
        <div className="products">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <a href="">{description}</a>
        </div>
    )
}
export default Product;
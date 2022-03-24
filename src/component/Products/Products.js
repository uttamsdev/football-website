import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'

const Products = () => {
     const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data[2].products))
    },[])
    return(
        <div>
            <h2 style={{color:'black',textAlign:'center'}}>Our Shop on SALE</h2>
            <div className="product">
                {
                products.map(product => <Product product={product}></Product>)
            }
            </div>
        </div>
    )
}
export default Products;
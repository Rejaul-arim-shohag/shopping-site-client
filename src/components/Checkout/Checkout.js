import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log('checkput',product)
    useEffect(()=>{
        fetch(`https://ancient-temple-97280.herokuapp.com/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    },[ productId])
    console.log(product)
    return (
        <div>
            <h3>name: {product.name}</h3>
            <h4>price : {product.price}</h4>
        </div>
    );
};

export default Checkout;
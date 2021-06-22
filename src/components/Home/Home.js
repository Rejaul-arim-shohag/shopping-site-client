import React from 'react';
import Product from '../Product/Product';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])
    // console.log(products)
    useEffect(()=>{
        fetch('https://ancient-temple-97280.herokuapp.com/products')
        .then((res)=>res.json())
        .then((data) => setProducts(data))
    },[])
    return (
           
        <div style={{marginLeft:"13%"}} className="row" >
            {
                products.map(pd =><Product product={pd}></Product>)
            }
         </div>
           
        
    );
};

export default Home;
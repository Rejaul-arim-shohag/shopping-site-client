import React from 'react';
import { Link,  useHistory  } from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';

const Product = (props) => {
    // console.log(props)
    const { name, price, imageURl, _id } = props.product;
    const history = useHistory()
    console.log(history)
    const handleOrder =() =>{
        const url = `/product/${_id}`
        history.push(url)
        console.log("button click")
    }
    return (
        <div className="col-md-3 m-3 ">
            <Card style={{ width: '20rem' }}>
                <div style={{width:"230px", margin:"0 auto"}}> <Card.Img variant="top" src={imageURl} /></div>
                <Card.Body >
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <p className="mr-5" style={{float:"left", fontSize:"23px"}}>{price} $</p>
                    <Card.Link href="#">
                    <Button as={Link}  onClick={()=>handleOrder()} key={_id} variant="primary">Buy Now</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
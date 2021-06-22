import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)

    useEffect(()=>{
        fetch('https://ancient-temple-97280.herokuapp.com/?email='+loggedinUser.email)
        .then((res) => res.json())
        .then((data) => setOrders(data))
    },[])
    return (
        <div>
            <h1>orders {orders.length}</h1>
            {
                orders.map(order => <li>{order.name} {order.price}</li>)
            }
        </div>
    );
};

export default Orders;
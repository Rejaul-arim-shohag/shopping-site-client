import React, { useState } from 'react';
import './Dashbord.css';
import { useForm } from "react-hook-form";
import axios from 'axios';



const Dashbord = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);
    console.log("state image",imageURL)
    const onSubmit = data => {
       console.log(data) 
        const productData={
            price:data.price,
            name:data.name,
            imageURl : imageURL,
        }
        const url = `http://localhost:5000/addProduct`
        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(productData)
          })
          .then(res => console.log('server side response', res))
          
        };

    

    const handleImageUpload = (product) => {
        console.log(product.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '9fcb871202081567ca26adf00c725e49')
        imageData.append('image', product.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log("this is image url", response.data.data.display_url)
                // setImageURL(response.data.data.display_url)
                setImageURL(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="d-flex">
            <div className=" mt-1 dashbordLeftSide col-md-3">
                <h3 className="p-4">FRESH VALY</h3>
            </div>
            <div className="mt-1 ml-4">
                <h3 className="p-4">Add product</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="productName ml-3" defaultValue="name" {...register("name")} />
                    <input className="productName ml-3" defaultValue="50" {...register("price")} />
                    <br></br>
                    <input className="mt-3 ml-3" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="mt-3 ml-5" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Dashbord;
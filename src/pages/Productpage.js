import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../components/Context/CartContext';

function Productpage() {

    const {id} = useParams();
    const[product,setProduct] = useState({});

    const[cart,setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart([...cart,product])
    }

    useEffect(() => {
        
        async function fetchProduct(){

            await fetch("https://play-ecom-api.allcodeapp.com/api/products/" + id)
            .then(async(data)=> {
                const response = await data.json();
                setProduct(response)
            })

        }

    fetchProduct();
    }
    , []);

  return (
    <div className='flex gap-8 mx-20 my-8 p-4 bg-gray-200 rounded-xl'>
        <img src={product.imgUrl} alt="product-pic" className='w-1/4' />
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-4xl'>{product.name}</h1>
            <p>{product.description}</p>
            <p className='font-bold'>{product.rating}/5</p>
            <button onClick={addToCart} className='p-4 w-1/4 bg-violet-800 text-white rounded-xl'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Productpage;

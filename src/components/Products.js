import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Products() {

    const [products,setProducts] = useState([]);

    useEffect(() => {

        async function fetchProducts() {

            await fetch("https://play-ecom-api.allcodeapp.com/api/products")    
                .then(async(data)=> {
                    const response = await data.json();
                    setProducts(response)
                })
        }
        
        fetchProducts();

        }
, []);

  return (
    <div className='p-8'>
      <h1 className='text-4xl font-semibold text-center mb-8'>Products</h1>
        <div className='grid grid-cols-5 gap-6 mb-4'>
            {products.map((product, index) => (
                <Product product={product} key={index}/>
            ))}
        </div>
    </div>
  )
}


function Product({product}) {
    return(
        <div className='flex flex-col gap-4 justify-between p-4 bg-gray-300 rounded-xl'>
            <img src={product.imgUrl} alt="product-pic" className='w-full h-[10rem] object-cover'/>
            <h3 className='font-semibold text-xl'>{product.name}</h3>
            <p className='text-center'>{product.rating}/5</p>
            <Link to={"/product/" + product.id} className='p-2 bg-violet-800 rounded-xl text-white text-center'>View Product</Link>
        </div>
    )
}

export default Products;

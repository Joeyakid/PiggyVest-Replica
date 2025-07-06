import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


const Shop = () => {
    const [getAxiosProducts, setGetAxiosProducts] = useState([])

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setGetAxiosProducts(res.data);
  }
  console.log(getAxiosProducts);
  


  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div className='grid grid-cols-2 items-center'>
        <div>
        <h1 className='text-7xl text-center'>SHOP NOW</h1>
        <div> 
        {getAxiosProducts.map((product, index) => (
        <div key={index}
        className='flex bg-blue-700 h-[500px] items-center '
        style={{ marginBottom: "1rem", padding: "1rem"}}>
            <main>
            <h2 className='font-bold text-white'>
                Title: {product.title}
            </h2>
            <h4 className='font-bold text-white'>
                Category: {product.category}
            </h4>
            <p className='font-bold text-white'>
                Description: {product.description}
            </p>
            <h5 className='font-bold text-xl text-white'>Price: {product.price}</h5>
            </main>
            <main className='flex px-[50px]'>
            <img src={product.image} alt=""  />
            </main>
        </div>
         ))}
         </div>
        </div>
    </div>
  )
}

export default Shop
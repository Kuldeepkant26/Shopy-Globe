import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { additem, removeitem } from '../Utils/cartSlice';
import axios from 'axios';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    let cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    async function fetchData() {
        try {                                                             //Error Handling
            const res = await axios.get('https://dummyjson.com/products');
            setProducts(res.data.products)
        } catch (error) {
            alert('Error in Fetching data')
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <button onClick={() => navigate(-1)} className='bg-black text-white p-2 rounded-lg ml-3 mt-3 w-fit'><i className="ri-arrow-left-line"></i>Back</button>

            <h1 className='w-full text-center m-4'>Total items {cart.length}</h1>
            {cart.length && products ? <div className='w-full flex flex-col gap-5 p-3'>
                {products.filter((product) => cart.includes(product.id)).map((product) => {
                    return <CartProduct key={product.title} product={product}></CartProduct>
                })}
            </div> : <div className='w-full flex flex-col items-center gap-4 mt-6'>
                <h1 className='text-red-500 text-3xl'>Your cart is empty</h1>
                <img className='w-1/2' src="https://i.pinimg.com/564x/bc/bd/99/bcbd99c43aea08b85d3c3a6b80a47b56.jpg" alt="" />
                <button className='bg-black p-2 rounded-xl text-white' onClick={() => navigate('/')}>
                    SHOP NOW
                </button>
            </div>}

        </div>
    )
}

export default Cart

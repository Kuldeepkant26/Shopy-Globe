import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeitem } from '../Utils/cartSlice';
import '../Css/CartProduct.css'

function CartProduct({ product, removeFromCart }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(id) {
        dispatch(removeitem(id));
    }

    return (
        <div className='card-horizontal'>
            {/* Image of the product */}
            <img className='product-image' src={product.thumbnail} alt={product.title} />

            <div className='card-content'>
                <Link
                    to={`/show/${product.id}`}
                    onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}
                    className="top-horizontal"
                >
                    <p className="text-gray-700">{product.rating} ⭐</p>
                    <p className='title-horizontal'>{product.title}</p>
                </Link>
                <div className="bottom-horizontal">
                    <div className="left-horizontal">
                        <p>{product.category}</p>
                    </div>
                    <button className='removebtn' onClick={() => handleRemoveFromCart(product.id)}>
                        Remove <i className="ri-shopping-cart-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;

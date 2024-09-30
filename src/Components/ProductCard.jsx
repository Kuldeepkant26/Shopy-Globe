import React from 'react'
import '../Css/ProductCard.css'
import { Link } from 'react-router-dom';
import { additem, removeitem } from '../Utils/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function ProductCard({ product }) {
    let cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function addtocart(id) {
        dispatch(additem(id));
    }

    return (
        <div className='card'>
            <Link
                to={`/show/${product.id}`}
                onClick={() => window.scrollBy({ top: -5000, behavior: 'smooth' })}
                className="top"
            >
                {/* Product Image */}
                <div className="image-container">
                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                </div>
                <p className="text-gray-700 rating"> {product.rating} ⭐</p>
                <p className='title'>{product.title}</p>
            </Link>

            <div className="bottom">
                <div className="left">
                    <p>{product.category}</p>
                    <p className='price'>${product.price}</p>
                </div>

                {!cart.includes(product.id) ? (
                    <button className='viewbtn' onClick={() => addtocart(product.id)}>
                        Add <i className="ri-shopping-cart-line"></i>
                    </button>
                ) : (
                    <button className='viewbtn' disabled>
                        Added <i className="ri-checkbox-circle-fill"></i>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductCard;

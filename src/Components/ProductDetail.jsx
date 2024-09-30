import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Css/ProductDetail.css'; // Add this for custom styles
import { additem, removeitem } from '../Utils/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    async function fetchData() {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
    }

    let cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function addtocart(id) {
        dispatch(
            additem(id)
        )
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!product) return <Loading></Loading>;

    return (
        <div className="product-detail-container">
            <button onClick={() => navigate(-1)} className='bg-black text-white p-2 rounded-lg m-0 w-fit'><i className="ri-arrow-left-line"></i>Back</button>
            <div className="product-detail-card">
                <img className="product-detail-image" src={product.thumbnail} alt={product.title} />
                <div className="product-detail-info">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">
                        Price: ${product.price.toFixed(2)} <span className="discount">-{product.discountPercentage}%</span>
                    </p>
                    <p className="product-category">Category: {product.category}</p>
                    <p className="product-rating">Rating: {product.rating} ⭐</p>
                    <p className={`availability-status ${product.availabilityStatus === 'Low Stock' ? 'low-stock' : ''}`}>
                        {product.availabilityStatus}
                    </p>
                    <div className="product-specs">
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>SKU:</strong> {product.sku}</p>
                        <p><strong>Weight:</strong> {product.weight}g</p>
                        <p><strong>Dimensions:</strong> {product.dimensions.width}cm x {product.dimensions.height}cm x {product.dimensions.depth}cm</p>
                        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                        {!cart.includes(product.id) ? <>
                            <button className='viewbtn bg-black text-white p-3 rounded-lg mt-3' onClick={() => addtocart(product.id)}>
                                Add <i className="ri-shopping-cart-line"></i>
                            </button>
                        </> : <>
                            <button className='viewbtn bg-black text-white p-3 rounded-lg mt-3' onClick={() => navigate('/cart')}>
                                view in cart<i className="ri-arrow-right-line"></i>
                            </button>
                        </>}
                    </div>
                </div>
            </div>

            <div className="product-reviews">
                <h2>Customer Reviews</h2>
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <p><strong>{review.reviewerName}</strong> ({review.rating} ⭐)</p>
                            <p>{review.comment}</p>
                            <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;

import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (

    <div className="product-item">
      <div className="pi-pic">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="" />
        </Link>
        <ul>
          <li className="w-icon active"><Link to={`/product/${product._id}`}><i className="fa fa-shopping-bag"></i></Link></li>
          <li className="quick-view"><Link to={`/product/${product._id}`}> Quick View</Link></li>
        </ul>
      </div>
      <div className="pi-text">
        <Link to={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </Link>
        <div className="product-price">
          ₹{product.price}
        </div>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

      </div>
    </div>
  )
}

export default Product

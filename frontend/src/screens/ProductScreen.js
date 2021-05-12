import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      setRating(0)
      setComment('')
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    // eslint-disable-next-line
  }, [dispatch, match, successProductReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <Link to="/shop">Shop</Link>
                <span>Detail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-shop spad page-details">
        <div className="container">
          <Link className='btn btn-light my-3' to='/'>
            Go Back
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Meta title={product.name} />
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="product-pic-zoom">
                        <img className="product-big-img" src={product.image} alt={product.name} />
                        <div className="zoom-icon">
                          <i className="fa fa-search-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="product-details">
                        <div className="pd-title">
                          <span>Product</span>
                          <h3>{product.name}</h3>
                        </div>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                        <br />
                        <div className="pd-desc">
                          <p>{' '}{product.description}</p>
                          <h4>₹{product.price}</h4>
                        </div>
                        <ul className="pd-tags">
                          <li><span>CATEGORIES: </span> {product.category}</li>
                          <li><span>STATUS: </span> {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</li>
                        </ul>
                        <div className="quantity">
                          <div className="pro-qty">
                            <select
                              className="qtySelect"
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <button
                            className="primary-btn pd-cart"
                            onClick={addToCartHandler}
                            disabled={product.countInStock === 0}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <div className="customer-review-option">
                    <div className="tab-item">
                      <ul className="nav" role="tablist">
                        <li>
                          <Link className="active" role="tab">Customer Reviews</Link>
                        </li>
                      </ul>
                    </div>
                    <br />
                    {product.reviews.length === 0 && <Message>No Reviews</Message>}
                    <div className="comment-option">
                      {product.reviews.map((review) => (
                        <div className="co-item" key={review._id}>
                          <div className="avatar-pic">
                            <i className="fa fa-user-circle"></i>
                          </div>
                          <div className="avatar-text">
                            <Rating value={review.rating} />
                            <h5>{review.name}<span>{' '}{review.createdAt.substring(0, 10)}</span></h5>
                            <div className="at-reply">{review.comment}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="leave-comment">
                      <h4>Leave A Comment</h4>
                      {successProductReview && (
                        <Message variant='success'>
                          Review submitted successfully
                        </Message>
                      )}
                      {loadingProductReview && <Loader />}
                      {errorProductReview && (
                        <Message variant='danger'>{errorProductReview}</Message>
                      )}
                      {userInfo ? (
                        <form onSubmit={submitHandler} className="comment-form">
                          <div className="row">
                            <div className="col-lg-6">
                              <select
                                as='select'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                              >
                                <option value=''>Select Rating...</option>
                                <option value='1'>1 - Poor</option>
                                <option value='2'>2 - Fair</option>
                                <option value='3'>3 - Good</option>
                                <option value='4'>4 - Very Good</option>
                                <option value='5'>5 - Excellent</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-12">
                              <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                placeholder="Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></textarea>
                              <button
                                disabled={loadingProductReview}
                                type='submit'
                                variant='primary'
                                className="site-btn"
                              >Submit
                            </button>
                            </div>
                          </div>
                        </form>
                      ) : (
                        <Message>
                          Please <Link to='/login'>sign in</Link> to write a review{' '}
                        </Message>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default ProductScreen

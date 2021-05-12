import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <Link to="/">Shop</Link>
                <span>Shopping Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="p-name">Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th><i className="ti-close"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                      </Message>
                    ) : (
                      <>
                        {
                          cartItems.map((item) => (
                            <tr key={item.product}>

                              <td className="cart-pic first-row"><img src={item.image} alt={item.name} width="100" /></td>
                              <td className="cart-title first-row">
                                <Link to={`/product/${item.product}`}>
                                  <h6>{item.name}</h6>
                                </Link>
                              </td>
                              <td className="p-price first-row">₹{item.price}</td>
                              <td className="qua-col first-row">
                                <div className="quantity">
                                  <div className="pro-qty">
                                    <select
                                      className="qtySelect"

                                      value={item.qty}
                                      onChange={(e) =>
                                        dispatch(
                                          addToCart(item.product, Number(e.target.value))
                                        )
                                      }
                                    >
                                      {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </td>
                              <td className="total-price first-row">₹{item.price}</td>
                              <td className="close-td first-row">
                                <button
                                  onClick={() => removeFromCartHandler(item.product)}
                                >
                                  <i className='fa fa-trash'></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 offset-lg-4">
                  <div className="proceed-checkout">
                    <ul>
                      <li className="subtotal">
                        Subtotal ({
                          cartItems.reduce((acc, item) => acc + item.qty, 0)
                        })
                        <span>
                          ₹
                            {cartItems
                            .reduce((acc, item) => acc + item.qty * item.price, 0)
                            .toFixed(2)}
                        </span>
                      </li>
                      <li className="cart-total">
                        Total
                        <span>
                          ₹
                            {cartItems
                            .reduce((acc, item) => acc + item.qty * item.price, 0)
                            .toFixed(2)}
                        </span>
                      </li>
                    </ul>
                    <button
                      className="proceed-btn"
                      disabled={cartItems.length === 0}
                      onClick={checkoutHandler}
                    >PROCEED TO CHECK OUT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartScreen

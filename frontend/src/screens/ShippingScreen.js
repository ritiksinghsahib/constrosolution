import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [firstName, setFirstName] = useState(shippingAddress.firstName)
  const [lastName, setLastName] = useState(shippingAddress.lastName)
  const [email, setEmail] = useState(shippingAddress.email)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country, firstName, lastName, email, phone }))
    history.push('/payment')
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
                <span>Check Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout-section spad">
        <div className="container">
          <CheckoutSteps step1 step2 />
          <form onSubmit={submitHandler} className="checkout-form">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <h4>Biiling Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <label controlId='firstName'>First Name<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter First Name'
                      value={firstName}
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label controlId='lastName'>Last Name<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter Last Name'
                      value={lastName}
                      required
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label controlId='email'>Email Address<span>*</span></label>
                    <input
                      type='email'
                      placeholder='Enter Email Address'
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label controlId='phone'>Phone<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter Phone Number'
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label controlId='country'>Country<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter Country'
                      value={country}
                      required
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label controlId='address'>Street Address<span>*</span></label>
                    <input
                      type="text"
                      className="street-first"
                      placeholder='Enter Street Address'
                      value={address}
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label controlId='postalCode'>Postcode / ZIP<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter Postal / ZIP Code'
                      value={postalCode}
                      required
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label controlId='city'>Town / City<span>*</span></label>
                    <input
                      type='text'
                      placeholder='Enter Town / City'
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="order-btn">
                  <button type="submit" className="site-btn place-btn">Continue</button>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ShippingScreen

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-left">
              <ul>
                {/* <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +910000000000</li> */}
                <li>Email: cosntrosolution26@gmail.com</li>
              </ul>
              <div className="footer-social">
                <Link to="/"><i className="fa fa-facebook"></i></Link>
                <Link to="/"><i className="fa fa-instagram"></i></Link>
                <Link to="/"><i className="fa fa-twitter"></i></Link>
                <Link to="/"><i className="fa fa-pinterest"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="footer-widget">
              <h5>Information</h5>
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/placeorder">Checkout</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-widget">
              <h5>My Account</h5>
              <ul>
                <li><Link to="/profile">My Account</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
                <li><Link to="/">Shop</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="newslatter-item">
              <h5>Join Our Newsletter Now</h5>
              <p>Get E-mail updates about our latest shop and special offers.</p>
              <form action="submit" className="subscribe-form">
                <input type="text" placeholder="Enter Your Mail" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-reserved"></div>
    </footer>

  )
}

export default Footer

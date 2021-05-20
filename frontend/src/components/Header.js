import React from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import logo from '../assets/img/logo.png'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <q> <i class="fa fa-phone" ></i>+918002862026</q>
              <a href="mailto:constrosolution26@gmail.com"><i className=" fa fa-envelope"></i>constrosolution26@gmail.com</a>
              {/* <a href="tel:+910000000000"><i className=" fa fa-phone"></i>+910000000000</a> */}
            </div>
          </div>
          <div className="ht-right">
            {userInfo ? (
              <Link to="/" onClick={logoutHandler} className="login-panel"><i className="fa fa-sign-out"></i>Sign Out</Link>
            ) : (
              <Link to="/login" className="login-panel"><i className="fa fa-sign-in"></i>Sign In</Link>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm">
              <Route render={({ history }) => <SearchBox history={history} />} />
            </div>
            <div className="col-lg-4 text-right col-md-4">
              <ul className="nav-right">
                <li className="cart-icon">
                  {userInfo ? (
                    <Link to="/profile">
                      <p><i className="fa fa-user"></i>{' '}{userInfo.name}</p>
                    </Link>
                  ) : (
                    <Link to="/profile">
                      <p><i className="fa fa-user"></i> Account</p>
                    </Link>
                  )}
                </li>
                <li className="cart-icon">
                  <Link to="/cart">
                    <p><i className="fa fa-shopping-cart"></i> Cart</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="ti-menu"></i>
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active"><Link to="/">Building Materials</Link></li>
                <li><Link to="/">TMT Steel Bars</Link></li>
                <li><Link to="/">Bricks</Link></li>
                <li><Link to="/">Aggregates</Link></li>
                <li><Link to="/">Water Proofing</Link></li>
                <li><Link to="/">Wall Finish</Link></li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active"><Link to="./index.html">Home</Link></li>
              <li><Link to="/">Shop</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Pages</Link>
                <ul className="dropdown">
                  <li><Link to="/cart">Shopping Cart</Link></li>
                  <li><Link to="/placeorder">Checkout</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </li>
              {userInfo && userInfo.isAdmin && (
                <li><Link to="/">Admin Access</Link>
                  <ul className="dropdown">
                    <li><Link to="/admin/userlist">Users</Link></li>
                    <li><Link to="/admin/productlist">Products</Link></li>
                    <li><Link to="/admin/orderlist">Orders</Link></li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}

export default Header

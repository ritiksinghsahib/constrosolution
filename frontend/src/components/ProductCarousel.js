import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/hero-1.jpg'
import img2 from '../assets/img/hero-2.jpg'
import img3 from '../assets/img/hero-3.jpg'
import img4 from '../assets/img/hero-4.jpg'
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'
import banner3 from '../assets/img/banner-3.jpg'

const ProductCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </Carousel>

      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner1} alt="" />
                <div className="inner-text">
                  <h4>Tools</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner2} alt="" />
                <div className="inner-text">
                  <h4>Exterior</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src={banner3} alt="" />
                <div className="inner-text">
                  <h4>Interior</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel

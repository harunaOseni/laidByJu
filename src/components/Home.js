import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        //{" "}
        {/* <!-- //header -->
// <!-- banner --> */}
        <div class="banner_w3lspvt" id="home">
          <div class="csslider infinity" id="slider1">
            <input type="radio" name="slides" checked="checked" id="slides_1" />
            <input type="radio" name="slides" id="slides_2" />
            <input type="radio" name="slides" id="slides_3" />
            <input type="radio" name="slides" id="slides_4" />

            <ul class="banner_slide_bg">
              <li>
                <div class="slider-info bg1">
                  <div class="bs-slider-overlay">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We Create and Renovate Hair Style Trends
                        </h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>

                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg2">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          We Help to grow your hair as well beard{" "}
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg3">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We Design and Create Hair Style Latest
                        </h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg4">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          We design latest trending haircuts{" "}
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="navigation">
              <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
              </div>
            </div>
          </div>
        </div>
        //{" "}
        {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
        <section class="content-info py-5" id="about">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">
              <div class="title-desc text-center px-lg-5">
                <img
                  src="assets/images/about1.png"
                  alt="news image"
                  class="img-fluid"
                />
                <p class="px-lg-5">
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                </p>

                <Link
                  to="/services"
                  class="btn mt-lg-4 mt-3 read scroll"
                  role="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        //{" "}
        {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
        <section class="services py-5" id="services">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/services2.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4> Trim your Hair</h4>
                    <Link
                      to="/single"
                      class="read-more two btn m-0 px-3"
                      role="button"
                    >
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/services1.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Trim your Beard</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ab-info second mt-lg-4">
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser3.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>colouring</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser4.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Bathing</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser5.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>drying</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 ab-content">
                <div class="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser6.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Creams</h4>
                    <a href="single.html" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- /services -->
 
	// <!-- pricing -->  */}
        <section class="pricing py-5">
          <div class="container py-md-5">
            <h3 class="heading text-capitalize text-center mb-3 mb-sm-5">
              {" "}
              Our Pricing
            </h3>
            <div class="row pricing-grids">
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>PRICES FOR MUSTACHE TRIMMING</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 1</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$7</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 2</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$10</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 3</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$15</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 4</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$15</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 5</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$20</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Trim your Mustaches style 6</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$25</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>HAIR AND BEARD CUT PRICES</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 1</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$27</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 2</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$21</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 3</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$25</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 4</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$28</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 5</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$30</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Dye your hair and beard 6</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$35</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //pricing -->
//   <!--/order-now--> */}
        <section class="order-sec py-5">
          <div class="container py-md-5">
            <div class="test-info text-center">
              <h3 class="tittle order mb-3">
                <span class="mb-3">CLICK BELOW TO BOOK AN APPOINTMENT</span>Getting you the
                best hair do is our main priority.
              </h3>
              

              <div class="read-more mx-auto m-0 text-center">
                <Link to="/contact" class="read-more scroll btn">
                  Book An Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//order-now-->
// <!-- footer --> */}
      </div>
    );
  }
}
export default Home;

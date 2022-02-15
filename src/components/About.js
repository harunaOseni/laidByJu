import React, { Component } from "react";

import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- banner --> */}
        <section class="inner-page-banner" id="home"></section>
        {/* <!-- //banner -->
<!-- page details --> */}
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
        {/* <!-- //page details -->
	<!--about-mid --> */}
        <section class="banner-bottom py-5" id="exp">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">About Us</h3>
            <div class="row mid-grids mt-lg-5 mt-3">
              <div class="col-md-5 content-w3pvt-img">
                <img
                  src={require("../../public/assets/images/logo.PNG")}
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                <p class="mt-2 text-left">
                  Founded by Judith, a 19 years old professional stylist, Laid
                  By Ju is dedicated to remaining one of the top hair salons in
                  the San Antonio area, we strive for excellence in everything
                  we do. At Laid By Ju, we have hand-selected a team of
                  experienced stylists who never fail to consistently exceed
                  their clients expectations. When you visit our salon, you can
                  always expect to receive the same thing: a superior hair
                  making experience and treatment from one of the best hair
                  stylists in San Antonio.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //about-mid -->
<!-- stats --> */}
        <section class="stats-count">
          <div class="overlay py-5">
            <div class="container py-md-5">
              <div class="row text-center">
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                  <h5>700</h5>
                  <h6 class="pt-2">Clients</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>250 +</h5>
                  <h6 class="pt-2">Awards</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>150</h5>
                  <h6 class="pt-2">styles</h6>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                  <h5>1000%</h5>
                  <h6 class="pt-2">Rating</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//states -->*/}
      </div>
    );
  }
}
export default About;

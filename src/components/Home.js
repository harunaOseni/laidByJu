import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
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
                          We Create and Renovate The Best Hair Experience
                        </h2>
                        <p>
                          Laid By Ju was founded by an ambitious 19 year old on
                          a mission to deliver the best styling experience to
                          every individual.
                        </p>

                        <Link to="/booking" class="btn">
                          Book appointment
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
                          We make braids never seen before{" "}
                        </h4>
                        <p>
                          At Laid By Ju our specialties in braids are some of
                          the top 1% in the continent, our customers experience
                          never seen before braids styling.
                        </p>
                        <Link to="/booking" class="btn">
                          Book appointment
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
                          We make for one, we make for all, male included
                        </h2>
                        <p>
                          At Laid by Ju we are laser focused on providing the
                          best hair experience to every customer, and that
                          includes males.
                        </p>
                        <Link to="/booking" class="btn">
                          Book appointment
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
                          We provide and design variety of styles{" "}
                        </h4>
                        <p>
                          Our commitment to providing the best hair experience
                          with creative styles for our customers remains
                          unmatched.
                        </p>
                        <Link to="/booking" class="btn">
                          Book appointment
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

        {/* <!-- pricing -->  */}
        <section class="pricing py-5">
          <div class="container py-md-5">
            <h3 class="heading text-capitalize text-center mb-3 mb-sm-5 pricing-title">
              {" "}
              Our Pricing
            </h3>
            <div class="row pricing-grids">
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3 class="pricing-tags">KNOTLESS</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Waist length (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Waist length (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$240</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Waist length (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Waist length (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$180</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Buttlength (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$260</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Buttlength (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$280</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Buttlength (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Buttlength (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Kneelength (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$320</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Kneelength (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$340</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Kneelength (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$280</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Kneelength (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$250</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>hiplength (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$300</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>hiplength (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$320</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>hiplength (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$260</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>hiplength (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$240</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>crisscross Knotless (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$260</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>crisscross Knotless (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$280</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>crisscross Knotless (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$240</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>crisscross Knotless (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids buttlength (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$240</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids buttlength (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$260</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids buttlength (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids buttlength (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids waist length (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids waist length (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$240</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids waist length (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>box braids waist length (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$180</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3 class="pricing-tags">Boys</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Twists</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$60</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Travis Scott Braids</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$70</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Cornrows (regular)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$60</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>retwist</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$60</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3 class="pricing-tags">Twists</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Marleytwists (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Marleytwists (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Marleytwists (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$180</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Marleytwists (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$160</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Springtwists (smedium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$160</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Springtwists (small)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$180</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Springtwists (medium)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$120</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Springtwists (large)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$100</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3 class="pricing-tags">Other</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Coi leray braids</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$120</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Braided knotless bob (beads)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$180</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Braided box braids bob (heads)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$160</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Freestyle</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>call 832 406 5901</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Extended faux locs</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$200</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Crisscross extended faux locs</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$220</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
                  {/* <!-- Item ends --> */}
                </div>
              </div>

              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3 class="pricing-tags">Extras</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Adding hair (boys)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$30</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Adding beads</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$40</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>hearts</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$10</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Triangle parts</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$60</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Blow dry</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$30</h6>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Color mix</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$40</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
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
                <span class="mb-3">CLICK BELOW TO BOOK AN APPOINTMENT</span>
                Getting you the best hair do is our main priority.
              </h3>

              <div class="read-more mx-auto m-0 text-center">
                <Link to="/booking" class="read-more scroll btn">
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

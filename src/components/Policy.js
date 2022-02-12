import React, { Component } from "react";
import { Link } from "react-router-dom";

class Policy extends Component {
  render() {
    return (
      <div>
        <section class="inner-page-banner" id="home"></section>
        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Policy
            </li>
          </ol>
        </div>
        <section>
          <div class="mt-5">
            <img src="assets/images/rules.PNG" alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default Policy;

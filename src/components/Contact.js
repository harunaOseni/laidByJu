import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
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
              Book Appointment
            </li>
          </ol>
        </div>
        <section class="content-info py-5">
          <div class="container py-md-5">
            <div class="text-center px-lg-5">
              <h3 class="heading text-center mb-3 mb-sm-5">Book Appointment</h3>
            </div>
            <div class="contact-w3pvt-form mt-5">
              <form action="#" class="w3layouts-contact-fm" method="post">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        class="form-control"
                        type="email"
                        name="Email"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Date</label>
                      <input
                        class="form-control"
                        type="date"
                        name="Date"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                      <input
                        class="form-control"
                        type="number"
                        name="Phone"
                        placeholder=""
                        required="true"
                      />
                    </div>
                    <div class="form-group">
                      <label>Service</label>
                      <textarea
                        class="form-control"
                        name="Order"
                        placeholder="Hey there, we believe you have read our services and pricings in the home page, vividly explain to us what service you're looking for."
                        required=""
                      ></textarea>
                    </div>
                    <div class="form-group mt-3 float-right">
                      <button type="submit" class="btn submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div class="map-w3layouts">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Contact;

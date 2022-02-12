import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleService = (e) => {
    setService(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

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
            <form
              action={`mailto:jo715727@gmail.com?body=
                First Name: ${firstName}
                %0A
                %0A 
                Last Name: ${lastName}
                %0A
                %0A
                Email: ${email}
                %0A
                %0A
                Phone: ${phone}
                %0A
                %0A
                Service: ${service}
                %0A
                %0A
                Date: ${date}
                %0A
                %0A
                Time: ${time}&subject=Laid By Ju's Appointment Request

                `}
              class="w3layouts-contact-fm"
              method="post"
            >
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label>First Name</label>
                    <input
                      class="form-control"
                      type="text"
                      name="FirstName"
                      placeholder=""
                      required="true"
                      value={firstName}
                      onChange={handleFirstName}
                    />
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      class="form-control"
                      type="text"
                      name="LastName"
                      placeholder=""
                      required="true"
                      value={lastName}
                      onChange={handleLastName}
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      class="form-control"
                      type="email"
                      name="Email"
                      placeholder=""
                      required="true"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div class="form-group">
                    <label>Date</label>
                    <input
                      class="form-control"
                      type="date"
                      name="Date"
                      placeholder=""
                      required="true"
                      value={date}
                      onChange={handleDate}
                    />
                  </div>
                  <div class="form-group">
                    <label>Time</label>
                    <input
                      class="form-control"
                      type="time"
                      name="Time"
                      placeholder=""
                      required="true"
                      value={time}
                      onChange={handleTime}
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
                      value={phone}
                      onChange={handlePhone}
                    />
                  </div>
                  <div class="form-group">
                    <label>Service</label>
                    <textarea
                      class="form-control"
                      name="Service"
                      placeholder="Hey there, we believe you have read our services and pricings in the home page, vividly explain to us what service you're looking for."
                      required="true"
                      value={service}
                      onChange={handleService}
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
          src="https://www.google.com/maps/d/embed?mid=1BF4mB9erELZM1UEyn1N7ZZRGpl0&ehbc=2E312F"
          width="640"
          height="480"
          title="address"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

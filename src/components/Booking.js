import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Booking = () => {
  const [successfull, setSuccessfull] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const form = useRef(null);
  const [value, onChange] = useState("4:00 PM");
  const [knotless, setKnotless] = useState([
    "Knotless",
    "Waist Length (Smedium) $200 ",
    "Waist Length (Small) $220",
    "Waist Length (Medium) $180",
    "Waist Length (Large) $160",
    "Butt Length (Smedium) $220",
    "Butt Length (Small) $260",
    "Butt Length (Medium) $200",
    "Butt Length (Large) $180",
    "Knee Length (Smedium) $300",
    "Knee Length (Small) $320",
    "Knee Length (Medium) $260",
    "Knee Length (Large) $230",
    "Hip Length (Smedium) $280",
    "Hip Length (Small) $300",
    "Hip Length (Medium) $240",
    "Hip Length (Large) $220",
    "Crisscross Knotless (Smedium) $240",
    "Crisscross Knotless (Small) $260",
    "Crisscross Knotless (Medium) $220",
    "Crisscross Knotless (Large) $200",
    "Box Braids Buttlength (Smedium) $220",
    "Box Braids Buttlength (Small) $240",
    "Box Braids Buttlength (Medium) $200",
    "Box Braids Buttlength (Large) $180",
    "Box Braids waist length (Smedium) $200",
    "Box Braids waist length (Small) $220",
    "Box Braids waist length (Medium) $180",
    "Box Braids waist length (Large) $160",
  ]);
  const [knotlessVal, setKnotlessVal] = useState("");
  const [boys, setBoys] = useState([
    "Boys",
    "Twists $60",
    "Travis Scott Braids $70",
    "Cornrows (regular) $60",
    "Retwist $60",
  ]);
  const [boysVal, setBoysVal] = useState("");
  const [twist, setTwist] = useState([
    "Twists",
    "Marley Twists (Smedium) $200",
    "Marley Twists (Small) $220",
    "Marley Twists (Medium) $180",
    "Marley Twists (Large) $160",
    "Spring Twists (Smedium) $160",
    "Spring Twists (Small) $180",
    "Spring Twists (Medium) $120",
    "Spring Twists (Large) $100",
  ]);
  const [twistVal, setTwistVal] = useState("");
  const [others, setOthers] = useState([
    "Others",
    "Coi Leray Braids $120",
    "Braided Knotless Bob Beads $180",
    "Braided Box Braids Bob (Heads) $160",
    "Freestyle $varies",
    "Extended Faux Loes $180",
    "Crisscross Extended Faux Loes $200",
    "Pre-rolled blunt and water bottle $15",
  ]);
  const [othersVal, setOthersVal] = useState("");
  const [extras, setExtras] = useState([
    "Extras",
    "Adding Hair (Boys) $30",
    "Adding Beads $40",
    "Hearts $10",
    "Triangle Parts $60",
    "Blow Dry $30",
    "Color Mix $40",
  ]);
  const [extrasVal, setExtrasVal] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
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

  const handleKnotless = (e) => {
    setKnotlessVal(e.target.value);
  };

  const handleBoys = (e) => {
    setBoysVal(e.target.value);
  };

  const handleTwist = (e) => {
    setTwistVal(e.target.value);
  };

  const handleOthers = (e) => {
    setOthersVal(e.target.value);
  };

  const handleExtras = (e) => {
    setExtrasVal(e.target.value);
  };

  const templateParams = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: email,
    Date: date,
    Time: time,
    Phone: phone,
    Knotless: knotlessVal === "Knotless" ? "None" : knotlessVal,
    Boys: boysVal === "Boys" ? "None" : boysVal,
    Twists: twistVal === "Twists" ? "None" : twistVal,
    Others: othersVal === "Others" ? "None" : othersVal,
    Extras: extrasVal === "Extras" ? "None" : extrasVal,
  };

  const handleAppointment = () => {
    const data = {
      Name: firstName + " " + lastName,
      Appointment: date,
    };

    fetch(
      "https://sheet.best/api/sheets/f0cca0db-0a30-49a6-a0cc-1652bfee9e9d",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  const handleOwnerEmail = () => {
    emailjs
      .sendForm(
        "service_cu1e97m",
        "template_b3cz0xq",
        form.current,
        "user_9n5UgaRWPF1J1VEnHJpox",
        templateParams
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleOwnerEmail();
    //check if a user already has an appoitment for that particular date
    fetch(
      "https://sheet.best/api/sheets/f0cca0db-0a30-49a6-a0cc-1652bfee9e9d",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        let appointment = data.filter((app) => {
          return app.Appointment === date;
        });
        if (appointment.length > 0) {
          let squeeze = prompt(
            "Sorry, this date is already booked try another date or would you like to still squeeze in (Yes/No)?"
          );
          if (squeeze === "Yes" || squeeze === "yes") {
            handleAppointment();
            handleOwnerEmail();
            setEmail("");
            setFirstName("");
            setLastName("");
            setTime("");
            setDate("");
            setPhone("");
            setKnotlessVal("Knotless");
            setBoysVal("Boys");
            setTwistVal("Twists");
            setOthersVal("Others");
            setExtrasVal("Extras");
            setSuccessfull(true);
          } else {
            setSuccessfull(false);
            alert("Please try another date");
            setEmail(email);
            setFirstName(firstName);
            setLastName(lastName);
            setTime(time);
            setDate(date);
            setPhone(phone);
            setKnotlessVal(knotlessVal);
            setBoysVal(boysVal);
            setTwistVal(twistVal);
            setOthersVal(othersVal);
            setExtrasVal(extrasVal);
          }
        } else {
          handleAppointment();
          handleOwnerEmail();
          setEmail("");
          setFirstName("");
          setLastName("");
          setTime("");
          setDate("");
          setPhone("");
          setKnotlessVal("Knotless");
          setBoysVal("Boys");
          setTwistVal("Twists");
          setOthersVal("Others");
          setExtrasVal("Extras");
          setSuccessfull(true);
        }
      });
  };

  return (
    <div>
      {successfull === false ? (
        <>
          <section class="inner-page-banner" id="home"></section>
          <div class="breadcrumb-agile">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Booking
              </li>
            </ol>
          </div>
          <section class="content-info py-5">
            <div class="container py-md-5">
              <div class="text-center px-lg-5">
                <h3 class="heading text-center mb-3 mb-sm-5">
                  Book Appointment
                </h3>
              </div>
              <div class="contact-w3pvt-form mt-5">
                <form
                  class="w3layouts-contact-fm"
                  method="post"
                  ref={form}
                  onSubmit={handleSubmit}
                >
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <label>First Name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="First_Name"
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
                          name="Last_Name"
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
                          min="16:00"
                          max="18:00"
                          placeholder=""
                          required
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
                        <select
                          class="form-select form-control mb-2"
                          aria-label="Default select example"
                          onChange={handleKnotless}
                          name="Knotless"
                        >
                          {/* <option selected>Knotless</option> */}
                          {knotless.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
                        <select
                          class="form-select form-control mb-2"
                          aria-label="Default select example"
                          onChange={handleBoys}
                          name="Boys"
                        >
                          {boys.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
                        <select
                          class="form-select form-control mb-2"
                          aria-label="Default select example"
                          onChange={handleTwist}
                          name="Twists"
                        >
                          {twist.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
                        <select
                          class="form-select form-control mb-2"
                          aria-label="Default select example"
                          onChange={handleOthers}
                          name="Others"
                        >
                          {others.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
                        <select
                          class="form-select form-control mb-2"
                          aria-label="Default select example"
                          onChange={handleExtras}
                          name="Extras"
                        >
                          {extras.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                        </select>
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
        </>
      ) : (
        <div class="jumbotron bg-white">
          <h1 class="display-4 mt-5">Appointment Booked!</h1>
          <p class="lead">
            Thank you for booking an appointment with us. A member of our team
            will contact you shortly.
          </p>
          <hr class="my-4" />
          <p>
            In the meantime, you can check out our gallery to find out what
            we're made of!
          </p>
          <p class="lead">
            {/* eslint-disable-next-line */}
            <a class="btn  btn-lg booked-button" href="/gallery" role="button">
              Gallery
            </a>
          </p>
        </div>
      )}

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

export default Booking;

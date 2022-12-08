import React from "react";
import emailjs from "@emailjs/browser";
function Footer() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("quickcrop", "quickcrop_temp", e.target, "kgWSv7mKn7T812rbf")
      .then(
        (result) => {
          alert("Thank you for subscribing to our newsletter!");
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="container" style={{ width: "80%" }}>
      <footer className="py-5">
        <div className="row-md-4 mb-3 d-flex flex-column flex-sm-row justify-content-start">
          <div className="col-md-2 mb-3 flex-column flex-sm-row">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Crop Recommend
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Yield Prediction
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Fertilizer Recommendation
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-2 mb-3 d-flex">
            <p>
              Quick Crop is a free, open source project. It is licensed under
              the DJSCE license. The source code is available on GitHub.
            </p>
          </div>
          <div className="col-md-4 offset-md-3 mb-3 d-flex">
            <form onSubmit={sendEmail}>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>

              <div className="d-flex flex-column flex-sm-row w-100 gap-2  ">
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                />
                <label htmlFor="email" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <button
                className="btn btn-secondary btn-lg btn-block"
                type="submit"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#565e64",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "white",
            height: "3px",
            width: "50%",
            marginLeft: "24%",
          }}
        />
        <h6 style={{ textAlign: "center" }}>
          &copy; 2022 Quick Crop, Inc. <br />
          All rights reserved.
        </h6>
        <div>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="/">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

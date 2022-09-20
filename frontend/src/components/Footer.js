import React from "react";
function Footer() {
  return (
    <div className="container">
      <footer className="py-6" style={{ marginTop: "2%" }}>
        <div className="row-md-4 offset-md-4 mb-3 d-flex flex-column flex-sm-row justify-content-end">
          <div className="col md-4 offset-md-4 mb-3 flex-column flex-sm-row justify-content-start">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 offset-md-4 mb-3 d-flex">
            <p>
              Quick Crop is a free, open source project. It is licensed under
              the DJSCE license. The source code is available on GitHub.
            </p>
          </div>
          <div className="col-md-4 offset-md-4 mb-3 d-flex">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {}}
                >
                  Subscribe
                </button>
              </div>
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
        <div className="col-md-3 offset-md-5 d-flex flex-column flex-sm-row justify-content-between py-2">
          <p>
            &copy; 2022 Quick Crop, Inc. <br />
            All rights reserved.
          </p>

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

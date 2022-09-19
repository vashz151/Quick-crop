import React from "react";
function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col col-md-3 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 offset-md-4 mb-3 d-flex flex-column flex-sm-row justify-content-end">
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

        <div className="col-md-3 offset-md-5 d-flex flex-column flex-sm-row justify-content-between py-5 my-3 border-top">
          <p>&copy; 2022 Quick Crop, Inc. All rights reserved.</p>

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

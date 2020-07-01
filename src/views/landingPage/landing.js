/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div className="top-content">
        <div className="inner-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text">
                <h1>
                  <strong>Bambut</strong> Registration Form
                </h1>
                <div className="description">
                  <p>this lading page for Register</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 phone">
                <img src="assets/img/iphone.png" alt="" />
              </div>
              <div className="col-sm-5 form-box">
                <div className="form-top">
                  <div className="form-top-left">
                    <h3>Register to our App</h3>
                    <p>Fill in the form below to get instant access:</p>
                  </div>
                  <div className="form-top-right">
                    <i className="fa fa-pencil"></i>
                  </div>
                </div>
                <div className="form-bottom">
                  <form
                    role="form"
                    action=""
                    method="post"
                    className="registration-form"
                  >
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-first-name">
                        First name
                      </label>
                      <input
                        type="text"
                        name="form-first-name"
                        placeholder="First name..."
                        className="form-first-name form-control"
                        id="form-first-name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-last-name">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="form-last-name"
                        placeholder="Last name..."
                        className="form-last-name form-control"
                        id="form-last-name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="form-email">
                        Email
                      </label>
                      <input
                        type="text"
                        name="form-email"
                        placeholder="Email..."
                        className="form-email form-control"
                        id="form-email"
                      />
                    </div>
                    <button type="submit" className="btn">
                      Sign me up!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
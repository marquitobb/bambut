/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div class="top-content">
          <div class="inner-bg">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-sm-offset-2 text">
                  <h1>
                    <strong>Bambut</strong> Registration Form
                  </h1>
                  <div class="description">
                    <p>
                      this lading page for Register
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 phone">
                  <img src="assets/img/iphone.png" alt="" />
                </div>
                <div class="col-sm-5 form-box">
                  <div class="form-top">
                    <div class="form-top-left">
                      <h3>Register to our App</h3>
                      <p>Fill in the form below to get instant access:</p>
                    </div>
                    <div class="form-top-right">
                      <i class="fa fa-pencil"></i>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <form
                      role="form"
                      action=""
                      method="post"
                      class="registration-form"
                    >
                      <div class="form-group">
                        <label class="sr-only" for="form-first-name">
                          First name
                        </label>
                        <input
                          type="text"
                          name="form-first-name"
                          placeholder="First name..."
                          class="form-first-name form-control"
                          id="form-first-name"
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-last-name">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="form-last-name"
                          placeholder="Last name..."
                          class="form-last-name form-control"
                          id="form-last-name"
                        />
                      </div>
                      <div class="form-group">
                        <label class="sr-only" for="form-email">
                          Email
                        </label>
                        <input
                          type="text"
                          name="form-email"
                          placeholder="Email..."
                          class="form-email form-control"
                          id="form-email"
                        />
                      </div>
                      <button type="submit" class="btn">
                        Sign me up!
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

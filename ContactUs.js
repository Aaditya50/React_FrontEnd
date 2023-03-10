import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="text-center mt-5 mb-5 ml-5 mr-5 px-5 bg-warning">
        <div>
          <h1> Contact Us </h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="type your email here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Valuable Thoughts
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div>
            <button type="button" className="btn btn-warning btn-lg ">
              <a href="/">Submit</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;

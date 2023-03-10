import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3 text-center">
          <img
            src="./assets/aboutUs_1.jpg"
            className="card-img-top"
            alt="./assets/slider1.webp"
            width={1600}
            height={400}
          />
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">
              "Automate- Your One-Stop Shop for Car Servicing" is a
              comprehensive car servicing project that I developed. It is
              designed to automate the entire process of car servicing, from
              scheduling appointments to the final delivery of serviced cars to
              customers. The system includes features such as customer
              registration, appointment booking and online payment. It uses
              advanced technologies such as Spring Boot and React to provide an
              efficient and reliable service. This project showcases my
              proficiency in software development and my ability to design and
              develop complex systems.
            </p>
            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h1 className="card-title text-primary"> Meet Our Team </h1>
            <h3>Mr.Aaditya Sudhir Joshi</h3>
            <p className="card-text">PRN-220960520001</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
          {/* <img src="./assets/thanks.png" className="card-img-bottom" alt="./assets/slider1.webp"  width={1600} height={200} /> */}
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr.Mahesh Gahininath Khare </h3>
            <p className="card-text">PRN-220960520025</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Ms.Priyanka Ashok Arshanapelli</h3>
            <p className="card-text">PRN-220960520045</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr.Suraj Kisan Pawar </h3>
            <p className="card-text">PRN-220960520075</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mr.Prajwal Vilas Thete </h3>
            <p className="card-text">PRN-220960520077</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Ms.Vedika Vilas Kamble </h3>
            <p className="card-text">PRN-220960520081</p>
            <p className="card-text">PG-DAC CDAC September-2022</p>
          </div>
        </div>
        <div className="card text-center ">
          <div className="card-body">
            <h1 className="card-title text-primary"> Under Guidance of </h1>
            <h3>Ms.Sunitha C S Ma'am </h3>
            <p className="card-text">Project Engineer</p>
            <p className="card-text">CDAC </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;

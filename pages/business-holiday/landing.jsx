import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  const navbarStyle = {
    backgroundColor: "#333", // Change the color to your preferred dark color
  };

  const logoStyle = {
    width: "100px", // Adjust the width as needed
    height: "auto", // To maintain the aspect ratio
  };

  const footerStyle = {
    backgroundColor: "#333", // Match the dark background color of the footer with your header
    padding: "20px 0",
  };

  const footerTextStyle = {
    color: "#fff", // Set text color to white
  };

  const socialIconStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    gap: "10px",
  };

  const socialIconItemStyle = {
    fontSize: "24px",
  };

  const footerMenuStyle = {
    listStyle: "none",
    padding: 0,
  };

  const footerMenuItemStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const addressStyle = {
    listStyle: "none",
    padding: 0,
  };

  const addressTextStyle = {
    color: "#fff",
  };

  const dividerLineStyle = {
    border: "1px solid #fff",
  };

  return (
    <>
      <div className="nav-container">
        <div>
          <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="/images/logo.png" alt="" style={logoStyle} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* Add your navigation items here */}
                </ul>
                <div className="d-none d-lg-flex">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        Log Out
                      </Link>
                    </li>
                    {/* Add more labels as needed */}
                  </ul>
                </div>
                <div className="d-lg-none">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        Log Out
                      </Link>
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* banner */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/aboutus.png"
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt=""
            />
            <div className="row">
              <div className="col-md-8">
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Welcome To CordyChain</h1>
                    <br></br>
                    <p>
                      <a className="btn btn-lg btn-primary" href="info">
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="service_section">
        <div className="container">
          <h3 className="text-center">Our Available Services</h3>
          {/* devider */}
          <div className="row devider">
            <div className="col-md-4" />
            <div className="col-md-4 text-center">
              <div className="devider text-center">
                <div className="devider_line" />
              </div>
            </div>
            <div className="col-md-4" />
          </div>
          <div className="row py-4">
            <div className="col-md-1 col-sm-1" />
            <div className="col-md-5 col-sm-6 text-center">
              <div className="card">
                <div className="text-center">
                  <img
                    src="/images/register.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>
                    <a href="info">Register Your Product</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 text-center">
              <div className="card ">
                <div className="text-center">
                  <img
                    src="/images/check.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>Check Product Details</h6>
                </div>
              </div>
            </div>
            <div className="col-md-1 col-sm-1" />
          </div>
        </div>
      </section>

      {/* End Service Section */}
      <section className="why_online_ins">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Why XRPL?</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-6 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                  </div>
                </div>
                <div className="col-md-6" />
              </div>
              {/* end Devider */}
              <p>
                "CordyChain, harnessing the power of the XRP Ledger (XRPL),
                ushers in a new era for the agricultural industry, offering
                unrivaled transparency, traceability, and security. XRPL's
                blockchain technology guarantees real-time product tracking,
                combats fraud, and streamlines payments, delivering benefits to
                every participant, from hardworking farmers to discerning
                consumers. This groundbreaking innovation has the potential to
                revolutionize the agro-industry."
              </p>

              <a className="btn btn-lg btn-primary" href="/login/Login">
                Explore
              </a>
            </div>
            <div className="col-md-6">
              <div className="why_online_img">
                <img src="/images/homepage.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer" style={footerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_logo">
                <img src="/images/logo.png" alt="" style={logoStyle} />
              </div>

              <div className="social_icon">
                <ul style={socialIconStyle}>
                  <li style={socialIconItemStyle}>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li style={socialIconItemStyle}>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li style={socialIconItemStyle}>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li style={socialIconItemStyle}>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_title">
                <h3 className="text-white">Quick Links</h3>
              </div>
              <div className="footer_menu">
                <ul style={footerMenuStyle}>
                  <li>
                    <a href="#" style={footerMenuItemStyle}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/login/Login" style={footerMenuItemStyle}>
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer_title">
                <h3 className="text-white">Address</h3>
              </div>
              {/* address */}
              <div className="address">
                <ul style={addressStyle}>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <p className="address_text" style={addressTextStyle}>
                      Thimphu, Kabjisa, Bhutan
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <p className="address_text" style={addressTextStyle}>
                      +975 77252612
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    <p className="address_text" style={addressTextStyle}>
                      <a href="mailto:drukdendorji@gmail.com">
                        td856612@gmail.com{" "}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="row">
            {/* devider */}
            <div className="row devider">
              <div className="col-md-12 text-center">
                <div className="devider text-center">
                  <div className="devider_line" style={dividerLineStyle} />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="copy_right">
                <p className="text-center">
                  © 2023 All Rights Reserved.<a href="#"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

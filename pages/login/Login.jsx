import React from "react";
import Styles from "../../styles/Login.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch("/api/logging", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (response.status === 200) {
        // Login successful

        toast.success("Login Successful");
        // Redirect the user to another page (e.g., using React Router)
        // Replace '/dashboard' with the URL of the page you want to redirect to.
        router.push("/business-holiday/landing");
      } else {
        // Login failed
        toast.error("Login Failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while logging in. Please try again.");
    }
  };
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
                      <Link
                        href="/business-holiday/landing"
                        className="nav-link"
                      >
                        Back
                      </Link>
                    </li>
                    {/* Add more labels as needed */}
                  </ul>
                </div>
                <div className="d-lg-none">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        href="/business-holiday/landing"
                        className="nav-link"
                      >
                        Back
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
      <section className="login_section">
        <div className="container align-items-center justify-content-center">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card card-default mb-0">
                  <div className="card-body px-5 pb-5 pt-0">
                    <h4 className="text-center">Sign In</h4>

                    <hr className="hr-class" />
                    <form method="POST">
                      <div className="row my-3">
                        <div className="form-group col-md-12 mb-4">
                          <input
                            type="text"
                            className="form-control "
                            id="login"
                            placeholder="Email"
                            name="login"
                            required
                            defaultValue
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-12 ">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            defaultValue
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between mb-3">
                            <a
                              className="text-color underline text-sm pt-2"
                              href="#"
                            >
                              {" "}
                              Forgot your password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-main"
                            href="index"
                            onClick={handleLoginSubmit}
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="row my-3">
                      <div className="col-md-12">
                        <p>
                          Don't have an account yet ?
                          <a className="text-info" href="Registration">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

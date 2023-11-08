import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import SecretKeyForm from "./SecretForm";
import QRCode from "qrcode.react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import axios from "axios";

export default function Info() {
  const [username, setUsername] = useState("");
  const [prodid, setProdid] = useState("");
  const [cid, setCid] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isKeySubmitted, setIsKeySubmitted] = useState(false);
  const [qrCodeData, setQRCodeData] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleKeySubmit = () => {
    setIsKeySubmitted(true);
  };

  const generateQRCode = (data) => {
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data);
    // Use the JSON string to generate a QR code
    return jsonData;
  };

  // Create an object with the form data
  const formData = {
    username,
    prodid,
    cid,
    pnumber,
    address,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !prodid || !cid || !pnumber || !address) {
      toast.warning("Please fill out the required fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setLoading(true);

    try {
      // Submit the data to the API and wait for the response
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );

      if (response.status === 201) {
        // Display a success toast
        toast.success("Product Registration Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Generate the QR code and set it in the state
        const qrCodeData = generateQRCode(formData);
        setQRCodeData(qrCodeData);
        setFormSubmitted(true);
      } else {
        // Handle other status codes as needed
        console.log("Unexpected status code:", response.status);
        toast.error("Product Registration Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Show an error toast
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Hello");
    }
  }, []);

  const navbarStyle = {
    backgroundColor: "#333",
  };

  const logoStyle = {
    width: "100px",
    height: "auto",
  };

  const footerStyle = {
    backgroundColor: "#333",
    padding: "20px 0",
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

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
    backgroundColor: "transparent", // Set the background color to transparent
  };

  const buttonStyle = {
    background: "#007bff",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
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
      <div
        title="Register Crops"
        description="This is the section where you can upload your crop details with a picture if you have it."
      />

      {!isKeySubmitted ? (
        <SecretKeyForm onKeySubmit={handleKeySubmit} />
      ) : (
        <section className="info_section">
          <div className="container">
            <form onSubmit={handleSubmit} style={formStyle}>
              <div className="info-content info-card">
                <h4 className="text-center">Cordycep Product Information</h4>
                <div className="heading_bottom" />
                <div className="row input-element">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label-class lavel-down">
                          Harvester Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control input-normal"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label-class lavel-down">
                          PID <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control input-normal"
                          onChange={(e) => setProdid(e.target.value)}
                          value={prodid}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Date of Registration
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control input-normal"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Product Number<span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control input-normal"
                          onChange={(e) => setCid(e.target.value)}
                          value={cid}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Quantity
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control input-normal"
                          placeholder="amount in gram"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control input-normal"
                          onChange={(e) => setPnumber(e.target.value)}
                          value={pnumber}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Location<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control input-normal"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="lavel-down label-class">
                          Date of Harvest<span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control input-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <button
                  type="submit"
                  className="btn btn-main"
                  style={buttonStyle}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {formSubmitted && qrCodeData && (
        <section className="info_section">
          <div className="container">
            <div className="row">
              <h4 className="text-center">
                ***To view the Detail, Scan the Qrcoder***
              </h4>
              <div className="text-center">
                <QRCode value={qrCodeData} />
              </div>
              <div className="text-center">
                <a
                  href={`data:image/png;base64,${qrCodeData}`}
                  download="qrcode.png"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download QR Code
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      <ToastContainer />
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
          <div className="row">
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

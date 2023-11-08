import React from "react";
// import Banner from '../../components/banner/Banner'

export default function index() {
  return (
    <>
      <div
        title="Terms & Condition"
        description="Certain terms and condition you must follow"
      />
      {/* Service Section */}
      <section className="service_section">
        <div className="container">
          <h3 className="text-center">CordyChain on XRPL</h3>
          {/* devider */}
          <div className="row devider">
            <div className="col-md-2" />
            <div className="col-md-6 text-center">
              <div className="devider text-center">
                <div className="devider_line" />
                <div className="devider_line2" />
              </div>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row py-4">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card">
                <div className="text-center">
                  <img
                    src="/images/Group51.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>Security</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card ">
                <div className="text-center">
                  <img
                    src="/images/Group50.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>Transparency</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card ">
                <div className="text-center">
                  <img
                    src="/images/engineer1.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>Trustlessness</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="card ">
                <div className="text-center">
                  <img
                    src="/images/Group65.png"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h6>Efficiency</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service Section */}
      {/* Overview Section */}
      <section className="overview_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="overview_content">
                <h3>Overview</h3>
                <p>
                  "CordyChain, harnessing the power of the XRP Ledger (XRPL),
                  ushers in a new era for the agricultural industry, offering
                  unrivaled transparency, traceability, and security. XRPL's
                  blockchain technology guarantees real-time product tracking,
                  combats fraud, and streamlines payments, delivering benefits
                  to every participant, from hardworking farmers to discerning
                  consumers. This groundbreaking innovation has the potential to
                  revolutionize the agro-industry."
                </p>
              </div>
              <div className="overview_content">
                <h3>Terms &amp; Policy</h3>
                <p>
                  Welcome to Cordychain, a platform designed to secure the
                  detail and valueof the Cordyceps. These terms and conditions
                  (the "Agreement") govern your use of our services.
                </p>
                <p></p>
                <ul>
                  <li>
                    <p>
                      By using our website, you agree to abide by this
                      Agreement. If you disagree with any part of this
                      Agreement, please do not use our services.
                    </p>
                  </li>
                  <li>
                    <p>
                      Users are responsible for their conduct while using
                      Agro-Chain on xrpl and must adhere to all applicable laws
                      and regulations.
                    </p>
                  </li>
                  <li>
                    <p>
                      All content and intellectual property associated with
                      Agrochain are the exclusive property of Drukden. Users
                      must not reproduce, distribute, or use such materials
                      without prior authorization.
                    </p>
                  </li>
                  <li>
                    <p>
                      Agro chain disclaims liability for any damages or losses
                      incurred while using our website.
                    </p>
                  </li>
                </ul>
                <p>
                  We retain the right to modify the terms and conditions. Users
                  will be notified of changes, and continued use of our website
                  indicates acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Overview Section */}
    </>
  );
}

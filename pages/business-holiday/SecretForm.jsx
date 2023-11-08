//This is the page where we display a form
// We should enter the specific amount to move on to next step
// here we have implemented the xrp

import React, { useState } from "react";
import { toast } from "react-toastify";
// import Link from "next/link";
import WalletBalance from "./WalletBalance"; // Import the WalletBalance component
const xrpl = require("xrpl");

const SecretKeyForm = ({ onKeySubmit }) => {
  const [secretKey, setSecretKey] = useState("");
  const [xrpAmount, setXrpAmount] = useState("5"); // Declare xrpAmount state
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (secretKey === "sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ") {
      // Check if the entered XRP amount is exactly 5
      if (xrpAmount === "5") {
        // Compare with a string, not a number
        // setIsSubmitted(true);
        toast.info("Processing...", {
          position: "top-center",
          autoClose: 10000,
        });
        const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
        await client.connect();

        const wallet = xrpl.Wallet.fromSeed("sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ");
        const prepared = await client.autofill({
          TransactionType: "Payment",
          Account: wallet.address,
          Amount: xrpl.xrpToDrops(xrpAmount),
          Destination: "rwD7VQG3qQVyQeiPcC1JHyu4wCPzB4oVev",
        });

        const signed = wallet.sign(prepared);
        const tx = await client.submitAndWait(signed.tx_blob);

        console.log(tx);
        onKeySubmit();
        toast.success(
          "Secret key and XRP amount are correct. You can now submit your crop details.",
          {
            position: "top-center",
            autoClose: 5000,
          }
        );
      } else {
        toast.warning("You must enter exactly 5 XRP to proceed.", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } else {
      // setIsSubmitted(false);
      toast.error("Incorrect secret key. Please provide a valid key", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const formStyle = {
    width: "40%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
  };

  const inputStyle = {
    padding: "12px",
    margin: "10px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    background: "#007bff",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    margin: "30px",
  };

  const errorStyle = {
    textAlign: "center",
    color: "red",
    fontSize: "16px",
  };

  // ... (other code)

  return (
    <>
      <WalletBalance secretKey={secretKey} />

      <div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
            color: "blue", // Text color is blue
            textShadow: "2px 2px 4px rgba(255, 165, 0, 0.8)", // 3D shadow effect with an orange tin
            fontSize: "20px",
          }}
        >
          Pay an amount of 5 XRP to proceed with the registration of the
          Product!
        </h2>

        {/* Display balance using WalletBalance component */}
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="password"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            placeholder="Enter your secret key"
            style={inputStyle}
          />
          <input
            type="number"
            value={xrpAmount}
            onChange={(e) => setXrpAmount(e.target.value)}
            placeholder="XRP amount"
            style={inputStyle}
            readOnly // Add the readOnly attribute
          />

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
        {/* {isSubmitted === false && secretKey !== "" && xrpAmount !== "5" && (
          <p style={errorStyle}
            Not enough XRP amount entered. You must enter exactly 5 XRP.
          </p>
        )} */}
      </div>
    </>
  );
};

export default SecretKeyForm;

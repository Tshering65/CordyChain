import React, { useEffect, useState } from "react";
const xrpl = require("xrpl");

const WalletBalance = ({ secretKey }) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState("");
  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
        await client.connect();
        const wallet = xrpl.Wallet.fromSeed("sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ");
        setAddress(wallet.address);
        const account_data = await client.request({
          command: "account_info",
          account: wallet.address,
          ledger_index: "validated",
        });
        setBalance(xrpl.dropsToXrp(account_data.result.account_data.Balance));
      } catch (err) {
        console.log(err);
      }
    };

    fetchWalletData();
  }, [secretKey]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          color: "black",
          textShadow: "2px 2px 4px rgba(255, 165, 0, 0.8)", // 3D shadow effect with an orange tin
          fontSize: "20px",
        }}
      >
        <h3>Wallet Address: {address}</h3>
        <h3>XRP Balance: {balance} XRP</h3>
      </div>
    </div>
  );
};

export default WalletBalance;

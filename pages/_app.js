import "../styles/globals.css";
// import Layout from '../components/layouts/Layout'
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [infos, getInfos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getInfos();
        getInfos(response);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>CordyChain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      <ToastContainer />
    </>
  );
};

export default MyApp;

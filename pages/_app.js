// import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
// import '../styles/pages/main.scss'
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import * as React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import fav from "../public/favicon.png";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [Toggle, setToggle] = useState(false);
  useEffect(() => {
    if (
      router.pathname === "/Slice_index" ||
      router.pathname === "/dashboard/buyToken" ||
      router.pathname === "/dashboard/staking"
    ) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [router]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={fav.src} />
      </Head>
      <div className="wrapper_content">
        {Toggle ? "" : <Header />}
        <Component {...pageProps} />
      </div>
      {Toggle ? "" : <Footer />}
    </>
  );
}

export default MyApp;
